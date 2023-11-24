
function mudfish_adclean_5a0dc57fac4ade18f77df8fcb21d16f6() {
  try {
    Sizzle(`table.bd_lst tr[data-document-srl]:has(.ad_gray)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5a0dc57fac4ade18f77df8fcb21d16f6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5a0dc57fac4ade18f77df8fcb21d16f6, function (items) {
  if (mudfish_adclean_g_conf_5a0dc57fac4ade18f77df8fcb21d16f6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5a0dc57fac4ade18f77df8fcb21d16f6();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5a0dc57fac4ade18f77df8fcb21d16f6();
    });
  }
});
