
function mudfish_adclean_eb095785223a22ad93ab066380e164a7() {
  try {
    Sizzle(`#dongawrap > #view + div[class*="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_eb095785223a22ad93ab066380e164a7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_eb095785223a22ad93ab066380e164a7, function (items) {
  if (mudfish_adclean_g_conf_eb095785223a22ad93ab066380e164a7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_eb095785223a22ad93ab066380e164a7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});