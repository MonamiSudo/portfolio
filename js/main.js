$(function () {

    //$(window)
      //.on("load", load);

  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    $(document) //スマホ無効
      .on("scroll", scrollAnimation)
      .on("scroll", headerScrollBar);
  }

  $(document)
    .on("click", ".l-ham", hamburgerMenu);  

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

  // kozuka-gothic-pro 追加 
  (function (d) {
    var config = {
    kitId: 'znm3odn',
  scriptTimeout: 3000,
  async: true
  },
  h = d.documentElement, t = setTimeout(function () {h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () {a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try {Typekit.load(config)} catch (e) {} }; s.parentNode.insertBefore(tk, s)
  })(document);

});