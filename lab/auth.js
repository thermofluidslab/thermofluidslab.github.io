/**
 * auth.js — 会員ページ簡易認証
 *
 * パスワードは LAB_PASSWORD で設定。
 * ログイン状態は sessionStorage に保存（タブを閉じるとリセット）。
 */

const LAB_PASSWORD = "fluidlab2026"; // ← ここを変更してください

function requireAuth() {
  if (sessionStorage.getItem("labAuth") !== "ok") {
    // 現在のURLをリダイレクト先として保存
    sessionStorage.setItem("labAuthRedirect", location.href);
    location.href = "login.html";
  }
}

function doLogin(pw) {
  if (pw === LAB_PASSWORD) {
    sessionStorage.setItem("labAuth", "ok");
    const dest = sessionStorage.getItem("labAuthRedirect") || "index.html";
    sessionStorage.removeItem("labAuthRedirect");
    location.href = dest;
    return true;
  }
  return false;
}

function doLogout() {
  sessionStorage.removeItem("labAuth");
  location.href = "login.html";
}
