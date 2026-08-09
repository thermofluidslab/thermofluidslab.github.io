/**
 * project-page.js — プロジェクト詳細ページのレンダリング
 * project.html?id=nano / sports / hydrate / ml で使用
 */

(function () {
  "use strict";

  function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderProject() {
    const lang = (window._labSite && window._labSite.getCurrentLang())
      || localStorage.getItem("lang")
      || "ja";

    const id = getProjectId();
    const c = SITE_CONTENT[lang];
    const project = c.research.projects[id];
    const pc = c.project; // UI ラベル

    // ページタイトルを上書き（main.js より後に実行されるので上書きOK）
    if (project) {
      document.title = project.title + " — " + c.siteName;
    }

    const container = document.getElementById("projectContent");
    if (!container) return;

    if (!project) {
      container.innerHTML = `
        <a class="project-back-link" href="index.html#research">${escHtml(pc.backLabel)}</a>
        <p style="color:var(--text-light)">${lang === "ja" ? "プロジェクトが見つかりません。" : "Project not found."}</p>`;
      return;
    }

    // 本文の段落分割（\n\n で区切る）
    const bodyHtml = project.body
      .split("\n\n")
      .map((para) => {
        // **太字** をインライン変換
        const html = escHtml(para).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
        return `<p>${html}</p>`;
      })
      .join("");

    const keywordsHtml = project.keywords.length
      ? `<div class="project-meta-section">
          <p class="project-meta-label">${escHtml(pc.keywordsLabel)}</p>
          <div class="project-keywords">
            ${project.keywords.map((k) => `<span class="keyword-tag">${escHtml(k)}</span>`).join("")}
          </div>
        </div>`
      : "";

    const pubsHtml = project.relatedPublications.length
      ? `<div class="project-meta-section">
          <p class="project-meta-label">${escHtml(pc.pubsLabel)}</p>
          <ul class="project-pub-list">
            ${project.relatedPublications.map((p) => `<li>${escHtml(p)}</li>`).join("")}
          </ul>
        </div>`
      : "";

    const fundingHtml = project.funding && project.funding.length
      ? `<div class="project-meta-section">
          <p class="project-meta-label">${escHtml(pc.fundingLabel)}</p>
          <ul class="project-pub-list">
            ${project.funding.map((f) => `<li>${escHtml(f)}</li>`).join("")}
          </ul>
        </div>`
      : "";

    const imageHtml = project.image
      ? `<div class="project-detail-image">
           <img src="${escHtml(project.image)}" alt="${escHtml(project.imageAlt || "")}" loading="lazy">
         </div>`
      : "";

    container.innerHTML = `
      <a class="project-back-link" href="index.html#research">${escHtml(pc.backLabel)}</a>
      <div class="project-detail-header">
        <div class="project-detail-icon">${project.icon}</div>
        <h1 class="project-detail-title">${escHtml(project.title)}</h1>
      </div>
      ${imageHtml}
      <p class="project-detail-lead">${escHtml(project.lead)}</p>
      <div class="project-detail-body">${bodyHtml}</div>
      ${keywordsHtml}
      ${pubsHtml}
      ${fundingHtml}
      <div class="project-nav-footer">
        <a class="project-back-link" href="index.html#research">${escHtml(pc.backLabel)}</a>
      </div>`;
  }

  // DOMContentLoaded 時（main.js の後に登録されるため、langChanged も受信できる）
  document.addEventListener("DOMContentLoaded", renderProject);

  // 言語切替イベントを受けて再レンダリング
  document.addEventListener("langChanged", renderProject);
})();
