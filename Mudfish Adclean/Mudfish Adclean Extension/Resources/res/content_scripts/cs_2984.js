
function mudfish_adclean_9b1294148188e08f0c5080aae0685431() {
  try {
    Sizzle(`div[class^="aside_aside_"] div[class^="basicView_recommend_brand_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9b1294148188e08f0c5080aae0685431 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9b1294148188e08f0c5080aae0685431, function (items) {
  if (mudfish_adclean_g_conf_9b1294148188e08f0c5080aae0685431.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9b1294148188e08f0c5080aae0685431();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
