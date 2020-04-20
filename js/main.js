$(function () {

    //$(window)
      //.on("load", load);

  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    $(document) //スマホ無効
      .on("scroll", scrollAnimation)
      .on("scroll", headerScrollBar);
  } else {
    $(document)
      .on("click", ".l-ham", hamburgerMenu);
  }    

  // ハンバーガーメニュー
  function hamburgerMenu() {
    $('.l-ham').toggleClass("clicked");
  }

  // スクロールアニメーション
  function scrollAnimation() {
    var scrollAnimationElm = document.querySelectorAll('.c-sa');
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      const topMargin = 200;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + topMargin) {
        scrollAnimationElm[i].classList.add('show');
      }
    }
  }

  /*function load() {
    const spinner = document.getElementById('p-loading');
    spinner.classList.add('p-loaded');
  }*/

  // スクロール時ヘッダーに下線
  function headerScrollBar () {
    var scroll = $(window).scrollTop();
    if ( scroll > 70 ) {
      $('.l-header').addClass("l-header__scrollBottom");
    } else {
      $(".l-header").removeClass("l-header__scrollBottom");
    }
  }

});