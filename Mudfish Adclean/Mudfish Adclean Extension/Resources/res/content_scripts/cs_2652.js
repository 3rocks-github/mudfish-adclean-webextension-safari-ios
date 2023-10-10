
function mudfish_adclean_f4ad716ac331e1ce86a8e7334eced003() {
  try {
    Sizzle(`ins.adsbygoogle`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f4ad716ac331e1ce86a8e7334eced003 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f4ad716ac331e1ce86a8e7334eced003, function (items) {
  if (mudfish_adclean_g_conf_f4ad716ac331e1ce86a8e7334eced003.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f4ad716ac331e1ce86a8e7334eced003();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
