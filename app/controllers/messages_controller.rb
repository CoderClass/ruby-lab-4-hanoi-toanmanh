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
  end

  def create
    @room = Room.find params[:room_id]
    @message = @room.messages.create!(message_params)
    if @message.persisted?
      flash[:success] = "Message sent"
    else
      flash[:error] = "Can't send message"
    end
    redirect_back fallback_location: room_messages_path
  end

  def message_params
    params.require(:message).permit(:user,:body)
  end
end
