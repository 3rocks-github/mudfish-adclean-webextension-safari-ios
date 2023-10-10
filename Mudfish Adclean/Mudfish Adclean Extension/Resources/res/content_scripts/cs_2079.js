
function mudfish_adclean_390e75a6b7f2411af360b30059e353e8() {
  try {
    Sizzle(`.shop_naver`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_390e75a6b7f2411af360b30059e353e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_390e75a6b7f2411af360b30059e353e8, function (items) {
  if (mudfish_adclean_g_conf_390e75a6b7f2411af360b30059e353e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_390e75a6b7f2411af360b30059e353e8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
