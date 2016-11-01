// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.updateMessagesViaJSON = function() {
  console.log("inside updateMessagesViaJSON");
  $.getJSON("<%= room_messages_path(@room) %>", function(messages) {
    // loop through the messages and render them
    // you can use $(".messages").append("blah")
    // to add blah to the <div class="messages">...</div> element
    $(".messages").html('');

    for (i in messages){
      message = messages[i];
      $(".messages").append("<div class='message'><strong>" + message.user + "</strong> " + message.body + "</div>");
    }
  })
}
