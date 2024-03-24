$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});


// fixed footer
function footer_behind_ctn() {
  var footerHeight = $('.footer').outerHeight();
  $('main').css('margin-bottom', footerHeight);
}
$(document).ready(footer_behind_ctn);
$(window).resize(footer_behind_ctn);