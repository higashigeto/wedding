'use strict'; // ページ内リンクスクロールをスムーズにする

$(function () {
  $('body').on('click', 'a', function (e) {
    var _this = $(this);

    var _href = _this.attr('href');

    if (_href.charAt(0, 1) == '#') {
      e.preventDefault();

      var _target = $(_href == '#' || _href == '' ? $('html') : _href);

      if (_target.length == '0') _target = $('html');

      var position = _target.offset().top;

      var _scroll = _this.data('scroll');

      if (_scroll !== undefined) position = position + Number(_scroll);
      if (position <= 0) position = 1; //Android2系でスクロールのバグ対策

      $('html, body').animate({
        scrollTop: position
      }, 500, 'swing');
      return false;
    }
  });
}); // ハンバーガーメニュークリック時のメニューを閉じる

$('.ham_area a[href]').on('click', function () {
  $('.ham_btn').trigger('click');
}); // ハンバーガーメニュークリック時のクラス付与

$('.ham_btn').click(function () {
  $(this).toggleClass('active');
  $('.ham_area').toggleClass('active');
});
$(function () {
  $('.ham_btn').click(function () {
    // トリガーをクリックした時の条件分岐
    if ($('html').hasClass('is-fixed')) {
      // ナビを閉じるときの処理
      $('html').removeClass('is-fixed'); // 背景固定解除！
    } else {
      // ナビを開くときの処理
      $('html').addClass('is-fixed'); // 背景固定！
    }
  });
});