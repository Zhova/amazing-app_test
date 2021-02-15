$(document).ready(function () {
  // responsive header
  $(".burger").click(() => {
    $(".header-nav").toggle();
    $(".burger__line").toggleClass("active");
  });

  const $searchBtn = $(".search__toggle");
  const $searchBlock = $(".search__block");
  $searchBtn.click(() => {
    $searchBlock.toggle();
  });

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
