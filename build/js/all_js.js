"use strict";

$(document).ready(function () {
  // responsive header
  $(".burger").click(function () {
    $(".header-nav").fadeToggle();
    $(".burger__line").toggleClass("active");
  });
  var $searchBtn = $(".search__toggle");
  var $searchBlock = $(".search__block");
  $searchBtn.click(function () {
    $searchBlock.fadeToggle();
  });
  var $header = $(".header");
  var $hederBtnRequest = $(".header-btn");
  var $hederNav = $(".header-nav");
  var $headerSearchBlock = $(".header .search");
  var $burgerWrap = $(".burger-search-mob");

  (function responsiveHeader() {
    if ($(window).width() <= 1199) {
      $burgerWrap.prepend($headerSearchBlock);
      $hederNav.append($hederBtnRequest);
    }
  })(); // sliders


  $(".main-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
});