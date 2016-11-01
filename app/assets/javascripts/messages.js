// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.updateMessagesViaJSON = function() {
  console.log("inside updateMessagesViaJSON");
  $.getJSON(window.location.pathname+".json", function(messages) {
    // loop through the messages and render them
    // you can use $(".messages").append("blah")
    // to add blah to the <div class="messages">...</div> element
    
    e = $(".messages");
    e.html('');

    for (i in messages){
      message = messages[i];
      e.append("<div class='message'><strong>" + message.user + "</strong> " + message.body + "</div>");
    }
    e.animate({scrollTop: e.prop("scrollHeight")}, 500);

  })
}

window.updateMessagesViaJS = function() {
  console.log("inside updateMessageViaJS");
  $.ajax({ url: window.location.pathname, dataType: 'script' });
}
