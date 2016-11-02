console.log("setting up messages channel", App.cable);
App.messages = App.cable.subscriptions.create("MessagesChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
    console.log("connected");
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
    console.log("disconnected");
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log({
      "data received": data 
    });
  },

  test: function(data){
    this.perform('test', {
      message: data 
    });
  }
});
