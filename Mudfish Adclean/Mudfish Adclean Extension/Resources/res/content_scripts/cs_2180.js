
function mudfish_adclean_88286e015f1fb625bf2b6e523499213c() {
  try {
    Sizzle(`.top-banners`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_88286e015f1fb625bf2b6e523499213c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_88286e015f1fb625bf2b6e523499213c, function (items) {
  if (mudfish_adclean_g_conf_88286e015f1fb625bf2b6e523499213c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_88286e015f1fb625bf2b6e523499213c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
