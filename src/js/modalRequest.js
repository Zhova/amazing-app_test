$(document).ready(function () {
  const $body = $("body");
  const $modalWrap = $(".modal-wrap");
  const $requestBtn = $(".btn_request");
  const $requestModal = $(".request-modal-wrap");
  const $inputsRequest = $(".modal-request-form .validate");
  // const $requestBg = $(".modal-request-bg");
  const $requestForm = $(".modal-request-form");

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

  $requestForm.submit((event) => {
    $(".error").remove();
    event.preventDefault();
    $inputsRequest.each((e, i) => {
      if (!$(i).val()) {
        const error = "<span class='error'>Cannot be blank</span>";
        console.log($(this));
        $(i).css("border-bottom", "2px solid red");
        $(i).before(error);
      } else {
        $(i).css("border-bottom", "2px solid rgba(156, 105, 226, 0.2");
      }
    });
  });
});
