// Shows English or 繁體中文: the visitor's choice, else their browser's language.
(function () {
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var zh = saved ? saved === 'zh' : /^zh/i.test(navigator.language || '');
  function set(isZh) {
    document.body.classList.toggle('zh', isZh);
    document.documentElement.lang = isZh ? 'zh-Hant' : 'en';
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String((b.dataset.l === 'zh') === isZh)); });
    try { localStorage.setItem('lang', isZh ? 'zh' : 'en'); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.l === 'zh'); }); });
  set(zh);
})();
