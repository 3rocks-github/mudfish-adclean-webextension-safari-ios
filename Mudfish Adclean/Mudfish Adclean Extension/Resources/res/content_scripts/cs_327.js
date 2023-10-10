
function mudfish_adclean_366582f970c72f38eed6144346676c3d() {
  try {
    Sizzle(`img[src*="//ad-api.enuri.info/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_366582f970c72f38eed6144346676c3d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_366582f970c72f38eed6144346676c3d, function (items) {
  if (mudfish_adclean_g_conf_366582f970c72f38eed6144346676c3d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_366582f970c72f38eed6144346676c3d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});