class Api::CardsController < ApplicationController 
  def show
    @card = Card.find(params[:id])

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card data provided"
    render 'api/shared/error', status: 404
  end

  def create 
    list = List.find(params[:list_id])
    
    @card = Card.new(card_params.merge(list: list ))

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid list id provided"
    render 'api/shared/error', status: 404
  end

  def update
    @card = Card.find(params[:id])
    
    if @card.update(card_params) 
      render :update, status: :accepted
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  
  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: 404
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :completed)
  end

end