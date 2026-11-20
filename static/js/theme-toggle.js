/**
 * 日间 / 夜间模式切换
 * ----------------------------------------------------------------------------
 * 初始主题由 baseof.html 中的内联脚本提前写入 <html data-bs-theme>，
 * 这里只负责按钮交互与无障碍标签同步；
 * 月亮/太阳图标的显示由 tokens.css 中的 --icon-*-display 变量控制。
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-theme-toggle]');
  var labels = { light: '切换至夜间模式', dark: '切换至日间模式' };

  function currentTheme() {
    return root.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
  }

  function sync() {
    var theme = currentTheme();
    Array.prototype.forEach.call(buttons, function (button) {
      button.setAttribute('aria-label', labels[theme]);
      button.setAttribute('title', labels[theme]);
    });
  }

  function toggle() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* 隐私模式下 localStorage 可能不可用，切换仍应生效 */
    }
    sync();
  }

  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener('click', toggle);
  });
  sync();
})();
