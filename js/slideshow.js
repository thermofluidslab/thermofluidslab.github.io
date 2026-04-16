/**
 * slideshow.js — フルワイドスライドショー（index.html 専用）
 * 自動切替 5秒、フェードトランジション
 */
(function () {
  "use strict";

  var INTERVAL = 5000;

  var wrap = document.getElementById("mainSlideshow");
  if (!wrap) return;

  var slides = wrap.querySelectorAll(".slide");
  var dotsEl = document.getElementById("slideDots");
  var current = 0;
  var timer = null;

  if (slides.length < 2) return;

  // ドット生成
  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.className = "slide-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", (i + 1) + "枚目のスライド");
    dot.addEventListener("click", function () { goTo(i); });
    dotsEl.appendChild(dot);
  });

  function goTo(n) {
    slides[current].classList.remove("active");
    dotsEl.children[current].classList.remove("active");
    current = (n + slides.length) % slides.length;
    slides[current].classList.add("active");
    dotsEl.children[current].classList.add("active");
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function () { goTo(current + 1); }, INTERVAL);
  }

  var prevBtn = wrap.querySelector(".slide-prev");
  var nextBtn = wrap.querySelector(".slide-next");
  if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); });

  // スワイプ対応（タッチ）
  var touchStartX = 0;
  wrap.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  wrap.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  resetTimer();
})();
