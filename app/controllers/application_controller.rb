class ApplicationController < ActionController::Base
  before_action do
    sleep 1
  end

  protect_from_forgery with: :null_session
end
