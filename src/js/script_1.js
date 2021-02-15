$(document).ready(function () {
  // main variables
  const $body = $("body");

  // responsive header
  $(".burger").click(() => {
    $(".header-nav").fadeToggle();
    $(".burger__line").toggleClass("active");
  });

  const $searchBtn = $(".search__toggle");
  const $searchBlock = $(".search__block");
  $searchBtn.click(() => {
    $searchBlock.fadeToggle();
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

  // sliders
  $(".main-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  // modal request
  const $modalWrap = $(".modal-wrap");
  const $requestBtn = $(".btn_request");
  const $requestModal = $(".request-modal-wrap");
  const $requestBg = $(".modal-request-bg");

  $requestBtn.click(() => {
    $requestModal.addClass("open");
    $body.css("overflowY", "hidden");
  });
  $modalWrap.click((e) => {
    if ($(e.target).hasClass("modal-wrap")) {
      $requestModal.removeClass("open");
      $body.css("overflowY", "auto");
    }
  });

  let countStringsMessage = 0;

  countStringsMessage += $(".modal-request-form__message").val().split("\n")
    .length;
  setInterval(() => {
    console.log(countStringsMessage);
  }, 1000);
});
