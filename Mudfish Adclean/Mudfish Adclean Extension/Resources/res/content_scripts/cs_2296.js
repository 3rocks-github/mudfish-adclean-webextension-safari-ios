
function mudfish_adclean_aa354963fb23e7079126f8ffe64aed39() {
  try {
    Sizzle(`[class][itemtype*="//schema.org/"] > .center`).forEach(element => {
      element.style.width = "100% !important";
element.style.flexBasis = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aa354963fb23e7079126f8ffe64aed39 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aa354963fb23e7079126f8ffe64aed39, function (items) {
  if (mudfish_adclean_g_conf_aa354963fb23e7079126f8ffe64aed39.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aa354963fb23e7079126f8ffe64aed39();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_aa354963fb23e7079126f8ffe64aed39();
    });
  }
});
