
function mudfish_adclean_69e540009a72e78e28cef0d65f9ed4e0() {
  try {
    Sizzle(`.thisTimeNews > div[class^="bn"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_69e540009a72e78e28cef0d65f9ed4e0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_69e540009a72e78e28cef0d65f9ed4e0, function (items) {
  if (mudfish_adclean_g_conf_69e540009a72e78e28cef0d65f9ed4e0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_69e540009a72e78e28cef0d65f9ed4e0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});