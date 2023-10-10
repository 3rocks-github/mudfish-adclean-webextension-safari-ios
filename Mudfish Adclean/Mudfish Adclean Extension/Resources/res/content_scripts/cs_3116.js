
function mudfish_adclean_f12666f7156803a4de65e4d9273728e1() {
  try {
    Sizzle(`.productListWrapper > .choiceWrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f12666f7156803a4de65e4d9273728e1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f12666f7156803a4de65e4d9273728e1, function (items) {
  if (mudfish_adclean_g_conf_f12666f7156803a4de65e4d9273728e1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f12666f7156803a4de65e4d9273728e1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});