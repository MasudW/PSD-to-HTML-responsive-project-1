$(document).ready(function () {
  /* -------- slide swipper js -------- */
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /* ------------ NAV MENU ------------ */
  $('header nav').meanmenu({
    meanMenuClose: "X",
    meanScreenWidth: 676,
  });
});