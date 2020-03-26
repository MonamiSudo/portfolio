$(function () {
  // ハンバーガーメニューボタン　アニメーション
  //$(document)
    //.on('click', '#hamburger', hamburger)

    $(window)
      .on('load', load);

    $(document)
      .on("scroll", scrollAnimation);  

  function hamburger() {
    const ham_line = document.getElementById("hamburger");
    ham_line.classList.toggle("clicked");
  }

  function scrollAnimation() {
    var scrollAnimationElm = document.querySelectorAll('.c-sa');
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      const topMargin = 200;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + topMargin) {
        scrollAnimationElm[i].classList.add('show');
      }
    }
  }

  function load() {
    const spinner = document.getElementById('p-loading');
    spinner.classList.add('p-loaded');
  }


});