
function mudfish_adclean_d215108b961223464ce792b7f7647de1() {
  try {
    Sizzle(`ul#_dealListContainer.list > li.item.type_admon[data-maincategoryno]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d215108b961223464ce792b7f7647de1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d215108b961223464ce792b7f7647de1, function (items) {
  if (mudfish_adclean_g_conf_d215108b961223464ce792b7f7647de1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d215108b961223464ce792b7f7647de1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});