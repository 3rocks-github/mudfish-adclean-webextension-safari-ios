
function mudfish_adclean_da00f1352653995a200c6807c4f5da7b() {
  try {
    Sizzle(`iframe[src*="//burgeon.co.kr/mad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_da00f1352653995a200c6807c4f5da7b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_da00f1352653995a200c6807c4f5da7b, function (items) {
  if (mudfish_adclean_g_conf_da00f1352653995a200c6807c4f5da7b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_da00f1352653995a200c6807c4f5da7b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});