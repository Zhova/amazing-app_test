$(document).ready(function () {
  $(".burger").click(() => {
    $(".header-nav").fadeToggle();
    $(".burger__line").toggleClass("active");
  });

  const $searchBtn = $(".search__toggle");
  const $searchBlock = $(".search__block");
  $searchBtn.click(() => {
    $searchBlock.fadeToggle();
  });

  const $header = $(".header");
  const $hederBtnRequest = $(".header-btn");
  const $hederNav = $(".header-nav");
  const $headerSearchBlock = $(".header .search");
  const $burgerWrap = $(".burger-search-mob");

  (function responsiveHeader() {
    if ($(window).width() <= 1199) {
      $burgerWrap.prepend($headerSearchBlock);
      $hederNav.append($hederBtnRequest);
    }
  })();
});
