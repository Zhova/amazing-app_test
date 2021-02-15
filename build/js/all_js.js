"use strict";

$(document).ready(function () {
  // main variables
  var $body = $("body"); // responsive header

  $(".burger").click(function () {
    $(".header-nav").fadeToggle();
    $(".burger__line").toggleClass("active");
  });
  var $searchBtn = $(".search__toggle");
  var $searchBlock = $(".search__block");
  $searchBtn.click(function () {
    $searchBlock.fadeToggle();
  });
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
  }); // modal request

  var $modalWrap = $(".modal-wrap");
  var $requestBtn = $(".btn_request");
  var $requestModal = $(".request-modal-wrap");
  var $requestBg = $(".modal-request-bg");
  $requestBtn.click(function () {
    $requestModal.addClass("open");
    $body.css("overflowY", "hidden");
  });
  $modalWrap.click(function (e) {
    if ($(e.target).hasClass("modal-wrap")) {
      $requestModal.removeClass("open");
      $body.css("overflowY", "auto");
    }
  });
  var countStringsMessage = 0;
  countStringsMessage += $(".modal-request-form__message").val().split("\n").length;
  setInterval(function () {
    console.log(countStringsMessage);
  }, 1000);
});