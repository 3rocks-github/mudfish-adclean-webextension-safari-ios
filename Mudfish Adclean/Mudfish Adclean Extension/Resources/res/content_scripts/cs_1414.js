
function mudfish_adclean_71991c46ceed16c642cbc56fd439c18a() {
  try {
    Sizzle(`#navigation-cnt > div[style*=" "]:not([style*="margin-bottom:"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_71991c46ceed16c642cbc56fd439c18a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_71991c46ceed16c642cbc56fd439c18a, function (items) {
  if (mudfish_adclean_g_conf_71991c46ceed16c642cbc56fd439c18a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_71991c46ceed16c642cbc56fd439c18a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_71991c46ceed16c642cbc56fd439c18a();
    });
  }
});
