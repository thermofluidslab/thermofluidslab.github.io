/**
 * main.js — 言語切替・動的レンダリング（全ページ共用）
 */

(function () {
  "use strict";

  let currentLang = localStorage.getItem("lang") || "ja";

  // ── ユーティリティ ────────────────────────────────────────
  function escHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatDate(dateStr, lang) {
    const d = new Date(dateStr + "T00:00:00");
    return lang === "ja"
      ? `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
      : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  // ── テキスト差し込み (data-i18n 属性) ─────────────────────
  function applyI18n(c) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = getNestedKey(c, el.getAttribute("data-i18n"));
      if (val !== undefined) el.textContent = val;
    });
  }

  function getNestedKey(obj, key) {
    return key.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
  }

  // ── ホームページ ──────────────────────────────────────────
  function renderHomeIntro(c) {
    const el = document.getElementById("homeIntro");
    if (el) el.textContent = c.home.intro;
  }

  function renderNews(c) {
    const list = document.getElementById("newsList");
    if (!list) return;
    list.innerHTML = c.news.items
      .map(
        (item) =>
          `<li class="news-item">
            <time class="news-date">${escHtml(formatDate(item.date, c.lang))}</time>
            <span class="news-text">${escHtml(item.text)}</span>
          </li>`
      )
      .join("");
  }

  // ── 研究ページ ────────────────────────────────────────────
  function renderAbout(c) {
    const bodyEl = document.getElementById("aboutBody");
    if (bodyEl) {
      bodyEl.innerHTML = c.about.body
        .split("\n\n")
        .map((p) => `<p>${escHtml(p).replace(/\n/g, "<br>")}</p>`)
        .join("");
    }
  }

  function renderResearch(c) {
    const introEl = document.getElementById("researchIntro");
    if (introEl) {
      introEl.innerHTML = c.research.intro
        .split("\n\n")
        .map((paragraph) => `<p>${escHtml(paragraph)}</p>`)
        .join("");
    }

    const methodsEl = document.getElementById("researchMethods");
    if (methodsEl) {
      methodsEl.innerHTML = c.research.methods
        .map(
          (method) => `<div class="research-method-row">
            <span class="research-method-code">${escHtml(method.code)}</span>
            <div>
              <h3>${escHtml(method.label)}</h3>
              <p>${escHtml(method.description)}</p>
            </div>
          </div>`
        )
        .join("");
    }

    const topicsEl = document.getElementById("researchTopics");
    if (topicsEl) {
      topicsEl.innerHTML = c.research.topics
        .map((t) => {
          const figures = (t.figures || [])
            .map(
              (figure) => `<figure class="research-figure">
                <div class="research-figure-frame">
                  <img src="${escHtml(figure.image)}" alt="${escHtml(figure.alt)}" loading="lazy">
                </div>
                <figcaption>${escHtml(figure.caption)}</figcaption>
              </figure>`
            )
            .join("");
          const layoutClass = figures ? "research-topic-layout" : "research-topic-layout research-topic-layout--text-only";

          return `<article class="research-topic" id="research-${escHtml(t.id)}">
            <h3 class="research-topic-heading">${escHtml(t.title)}</h3>
            <div class="${layoutClass}">
              <div class="research-topic-text">
                <p class="research-topic-lead">${escHtml(t.question)}</p>
                <p>${escHtml(t.body)}</p>
                <p>${escHtml(t.approach)}</p>
              </div>
              ${figures ? `<div class="research-figures">${figures}</div>` : ""}
            </div>
          </article>`;
        })
        .join("");
      return;
    }

    // ホームページの研究カード
    const grid = document.getElementById("researchGrid");
    if (!grid) return;
    grid.innerHTML = c.research.topics
      .map((t) => {
        const imgHtml = t.image
          ? `<div class="research-card-img"><img src="${escHtml(t.image)}" alt="${escHtml(t.imageAlt || "")}" loading="lazy"></div>`
          : "";
        return `<a href="research.html#research-${escHtml(t.id)}" class="research-card${t.image ? "" : " research-card--text-only"}">
            ${imgHtml}
            <div class="research-card-body">
              <h3>${escHtml(t.title)}</h3>
              <p>${escHtml(t.cardBody || t.body)}</p>
              <span class="card-readmore">${escHtml(c.research.readMore)}</span>
            </div>
          </a>`;
      })
      .join("");
  }

  // ── メンバーページ ────────────────────────────────────────
  function renderMembers(c) {
    const container = document.getElementById("membersContent");
    if (!container) return;
    container.innerHTML = c.members.groups
      .map(
        (group) =>
          `<div class="member-group">
            <h2 class="member-group-label">${escHtml(group.label)}</h2>
            <ul class="member-list">
              ${group.members
                .map(
                  (m) =>
                    `<li class="member-item">
                      <span class="member-name">${escHtml(m.name)}</span>
                      <span class="member-title">${escHtml(m.title)}</span>
                      ${m.desc ? `<span class="member-desc">${escHtml(m.desc)}</span>` : ""}
                      ${m.email ? `<a class="member-email" href="mailto:${escHtml(m.email)}">${escHtml(m.email)}</a>` : ""}
                    </li>`
                )
                .join("")}
            </ul>
          </div>`
      )
      .join("");
  }

  // DOI URL を自動リンク化（escHtml 後に適用）
  function linkDoi(text) {
    return escHtml(text).replace(
      /(https:\/\/doi\.org\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener">$1</a>'
    );
  }

  // ── 業績ページ ────────────────────────────────────────────
  function renderPublications(c) {
    const container = document.getElementById("publicationsContent");
    if (!container) return;
    const limitAttr = container.getAttribute("data-limit");
    const limit = limitAttr ? parseInt(limitAttr, 10) : 0;
    const moreLabel = c.publications.moreLabel || "すべて見る →";
    const allPageUrl = "publications_all.html";
    container.innerHTML = c.publications.sections
      .map((sec) => {
        const items = (limit && sec.items.length > limit) ? sec.items.slice(0, limit) : sec.items;
        const hasMore = limit && sec.items.length > limit;
        return `<div class="pub-section">
            <h2 class="pub-section-label">${escHtml(sec.label)}</h2>
            <ol class="pub-list">
              ${items.map((item) => `<li>${linkDoi(item)}</li>`).join("")}
            </ol>
            ${hasMore ? `<p class="pub-more"><a href="${allPageUrl}">${escHtml(moreLabel)}</a></p>` : ""}
          </div>`;
      })
      .join("");
  }

  // ── アクセスページ ────────────────────────────────────────
  function renderAccess(c) {
    const a = c.access;
    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = escHtml(val).replace(/\n/g, "<br>");
    };
    set("accessAddressLabel", a.address.label);
    set("accessAddressValue", a.address.value);
    set("accessEmailLabel", a.email.label);
    const emailEl = document.getElementById("accessEmailValue");
    if (emailEl) {
      emailEl.innerHTML = String(a.email.value)
        .split(/\r?\n/)
        .map((displayEmail) => displayEmail.trim())
        .filter(Boolean)
        .map((displayEmail) => {
          const mailtoEmail = displayEmail.replace(/\[at\]/gi, "@");
          return `<a href="mailto:${escHtml(mailtoEmail)}">${escHtml(displayEmail)}</a>`;
        })
        .join("<br>");
    }
    set("accessTelLabel", a.tel.label);
    const telEl = document.getElementById("accessTelValue");
    if (telEl) telEl.innerHTML = `<a href="tel:${escHtml(a.tel.value)}">${escHtml(a.tel.value)}</a>`;
    set("accessDirectionsLabel", a.directions.label);
    set("accessDirectionsValue", a.directions.value);

    const mapEl = document.getElementById("mapContainer");
    if (mapEl) {
      mapEl.innerHTML = a.mapEmbed
        ? `<iframe src="${escHtml(a.mapEmbed)}" width="100%" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        : `<div class="map-placeholder"><p>${currentLang === "ja" ? "content.js の mapEmbed に Google Maps の埋め込みURLを設定してください" : "Set mapEmbed in content.js to display a map"}</p></div>`;
    }
  }

  // ── メインレンダリング ────────────────────────────────────
  function render() {
    const c = SITE_CONTENT[currentLang];

    document.title = c.pageTitle;
    document.documentElement.lang = c.lang;

    applyI18n(c);

    // 各ページで必要な関数だけ呼ぶ（存在しない要素はスキップ）
    renderHomeIntro(c);
    renderNews(c);
    renderAbout(c);
    renderResearch(c);
    renderMembers(c);
    renderPublications(c);
    renderAccess(c);

    const btn = document.getElementById("langToggle");
    if (btn) btn.textContent = currentLang === "ja" ? "EN" : "日本語";

    const footerEl = document.getElementById("footerCopy");
    if (footerEl) footerEl.textContent = c.footer.copy;

    // project-page.js 向けイベント
    document.dispatchEvent(new CustomEvent("langChanged", { detail: { lang: currentLang } }));
  }

  // ── 言語切替 ──────────────────────────────────────────────
  function toggleLang() {
    currentLang = currentLang === "ja" ? "en" : "ja";
    localStorage.setItem("lang", currentLang);
    render();
  }

  // ── ナビゲーション ────────────────────────────────────────
  function initNav() {
    const toggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (toggle && navList) {
      toggle.addEventListener("click", () => {
        navList.classList.toggle("open");
        toggle.setAttribute("aria-expanded", navList.classList.contains("open"));
      });
      navList.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => navList.classList.remove("open"));
      });
    }

    const header = document.querySelector("header");
    if (header) {
      window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 10);
      });
    }

    // index.html のセクションアクティブ表示
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-list a[href^='#']");
    if (sections.length && navLinks.length) {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting)
            navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
        }),
        { rootMargin: "-40% 0px -55% 0px" }
      );
      sections.forEach((s) => obs.observe(s));
    }
  }

  // ── 初期化 ────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    render();
    initNav();
    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.addEventListener("click", toggleLang);
  });

  window._labSite = { getCurrentLang: () => currentLang };
})();
