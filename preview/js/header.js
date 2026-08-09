/**
 * header.js — 共通ヘッダー注入
 *
 * 使い方（各HTMLの <body> 直後）:
 *   <script src="js/header.js"></script>
 *   <script>initSharedLayout('home');</script>
 *
 * activePage: 'home' | 'research' | 'members' | 'publications' | 'access'
 */

function initSharedLayout(activePage) {
  var navDefs = [
    { key: "home",         href: "index.html",        i18n: "nav.home" },
    { key: "research",     href: "research.html",     i18n: "nav.research" },
    { key: "members",      href: "members.html",      i18n: "nav.members" },
    { key: "publications", href: "publications.html", i18n: "nav.publications" },
    { key: "access",       href: "access.html",       i18n: "nav.access" },
  ];

  var navItems = navDefs.map(function (item) {
    var active = activePage === item.key ? ' class="active"' : "";
    return '<li><a href="' + item.href + '" data-i18n="' + item.i18n + '"' + active + "></a></li>";
  }).join("");

  var html =
    '<header>' +
      '<div class="container">' +
        '<div class="header-inner">' +
          '<a href="index.html" class="logo">' +
            '<span class="logo-text" data-i18n="siteName"></span>' +
          '</a>' +
          '<nav aria-label="ナビゲーション">' +
            '<button class="menu-toggle" aria-label="メニューを開く" aria-expanded="false">&#9776;</button>' +
            '<ul class="nav-list">' +
              navItems +
              '<li><button class="lang-toggle" id="langToggle" aria-label="言語を切替">EN</button></li>' +
            '</ul>' +
          '</nav>' +
        '</div>' +
      '</div>' +
    '</header>';

  document.body.insertAdjacentHTML("afterbegin", html);
}
