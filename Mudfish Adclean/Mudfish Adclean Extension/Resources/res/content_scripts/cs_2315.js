
function mudfish_adclean_7a2fe622594be7ac8097fb643c75c81f() {
  try {
    Sizzle(`html`).forEach(element => {
      element.style.overflow = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7a2fe622594be7ac8097fb643c75c81f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7a2fe622594be7ac8097fb643c75c81f, function (items) {
  if (mudfish_adclean_g_conf_7a2fe622594be7ac8097fb643c75c81f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7a2fe622594be7ac8097fb643c75c81f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});