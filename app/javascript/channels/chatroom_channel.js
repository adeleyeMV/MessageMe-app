import consumer from "channels/consumer";

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $("#message-container").append(data.mod_message);
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
    $("#message_body").val("");
    // Called when there's incoming data on the websocket for this channel
  },
});
