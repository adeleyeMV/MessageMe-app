// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import * as jquery from "jquery";
import "semantic-ui";
import "channels";

const scrollMessages = () => {
  const element = document.querySelector("#messages");
  if (!element) return;
  element.scrollTo(0, element.scrollHeight);
};

const clearInput = () => {
  const inputElement = document.querySelector("#message-input");
  inputElement.value = "";
};

$(document).on("turbo:load", function () {
  $(".ui.dropdown").dropdown();
  $(".message .close").on("click", function () {
    $(this).closest(".message").transition("fade");
  });
  clearInput();
  scrollMessages();
});

// $(document).on("turbo:load", function () {
//   if ($("#messages").length > 0) {
//     $("#messages").scrollTop($("#messages")[0].scrollHeight);
//   }
// });
