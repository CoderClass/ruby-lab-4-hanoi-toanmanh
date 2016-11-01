class MessagesController < ApplicationController
  def index
    @room = Room.find params[:room_id]
    @messages = @room.messages
    @message = Message.new
    if current_user
      @message.user = current_user
    else
      @message.user = "Guest"
    end

    respond_to do |format|
      format.html
      format.js
    end
  end

  def create
    @room = Room.find params[:room_id]
    @message = @room.messages.create! message_params
    respond_to do |format|
      format.html do
        if @message.persisted?
          redirect_to room_messages_path(@room)
        else
          flash[:error] = "Error: #{@message.errors.full_messages.to_sentence}"
          redirect_to root_path
        end
      end
      format.js 
    end
  end

  def message_params
    params.require(:message).permit(:user,:body)
  end
end
