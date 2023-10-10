
function mudfish_adclean_a71d99bd7f197d7fd74fa107b1690bb7() {
  try {
    Sizzle(`div[class$="mobile-banner"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a71d99bd7f197d7fd74fa107b1690bb7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a71d99bd7f197d7fd74fa107b1690bb7, function (items) {
  if (mudfish_adclean_g_conf_a71d99bd7f197d7fd74fa107b1690bb7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a71d99bd7f197d7fd74fa107b1690bb7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});