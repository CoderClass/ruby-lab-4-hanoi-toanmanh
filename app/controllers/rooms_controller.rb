class RoomsController < ApplicationController
  def index
    @rooms = Room.all
  end
  def create
    
    
    @room = Room.new room_params
    if @room.save
      flash[:success] = "Room created   !"
      redirect_to root_path
    else
      flash[:error] = "Room creating failed"
      redirect_to root_path
    end
  end

  def show
    @room = Room.find params[:id]
    redirect_to room_messages_path(@room)
  end


  private

  def room_params
    params.require(:room).permit(:name)
  end
end
