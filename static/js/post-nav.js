/**
 * 上一篇/下一篇长标题滚动
 * ----------------------------------------------------------------------------
 * 测量标题文本相对按钮的溢出宽度，写入 --nav-scroll 令牌；
 * 真正的平移由 custom.css 在悬浮态完成，JS 只负责提供精确距离。
 */
(function () {
  'use strict';

  var buttons = document.querySelectorAll('.post-nav-btn');

  function measure(button) {
    var text = button.querySelector('.post-nav-text');
    if (!text) {
      return;
    }
    var style = window.getComputedStyle(button);
    var padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    var visibleWidth = button.clientWidth - padding;
    var distance = Math.max(0, text.scrollWidth - visibleWidth);
    button.style.setProperty('--nav-scroll', '-' + distance + 'px');
  }

  Array.prototype.forEach.call(buttons, function (button) {
    measure(button);
    window.addEventListener('resize', function () {
      measure(button);
    });
  });
})();
