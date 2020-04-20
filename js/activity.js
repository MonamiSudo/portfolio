$(function () {
  if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    //sp無効
    $(document)
      .on("mousemove", ".p-introduction__index", imageChange);
  }

  $('a[href^="#"]').click( scrollAnimation165 );

  function imageChange() {
    $("#no1").on("mouseover", function() {
      $(".p-introduction__img").attr("src", "../img/sinkan2.JPG");
    });
    $("#no2").on("mouseover", function () {
      $(".p-introduction__img").attr("src", "../img/gassyuku.JPG");
    });
    $("#no3").on("mouseover", function () {
      $(".p-introduction__img").attr("src", "../img/gakusai3.JPG");
    });
    $("#no4").on("mouseover", function () {
      $(".p-introduction__img").attr("src", "../img/kurikon.JPG");
    });
    $("#no5").on("mouseover", function () {
      $(".p-introduction__img").attr("src", "../img/sinkan5.JPG");
    });
  }

  function scrollAnimation165() {
    var time = 500;
    var topMargin = -165;
    var href = $(this).attr("href");
    var target = $(href == "#" ? "html" : href);
    var targetTop = target.offset().top;
    $("html, body").animate({ scrollTop: targetTop + topMargin }, time, "swing");
    return false;
  }
});