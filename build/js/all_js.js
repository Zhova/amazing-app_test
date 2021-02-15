"use strict";

$(document).ready(function () {
  // responsive header
  $(".burger").click(function () {
    $(".header-nav").toggle();
    $(".burger__line").toggleClass("active");
  });
  var $searchBtn = $(".search__toggle");
  var $searchBlock = $(".search__block");
  $searchBtn.click(function () {
    $searchBlock.toggle();
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
  })();
});
$(document).ready(function () {
  $(".main-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
});
$(document).ready(function () {
  var _this = this;

  var $body = $("body");
  var $modalWrap = $(".modal-wrap");
  var $requestBtn = $(".btn_request");
  var $requestModal = $(".request-modal-wrap");
  var $inputsRequest = $(".modal-request-form .validate"); // const $requestBg = $(".modal-request-bg");

  var $requestForm = $(".modal-request-form");
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
  $requestForm.submit(function (event) {
    $(".error").remove();
    event.preventDefault();
    $inputsRequest.each(function (e, i) {
      if (!$(i).val()) {
        var error = "<span class='error'>Cannot be blank</span>";
        console.log($(_this));
        $(i).css("border-bottom", "2px solid red");
        $(i).before(error);
      } else {
        $(i).css("border-bottom", "2px solid rgba(156, 105, 226, 0.2");
      }
    });
  });
});