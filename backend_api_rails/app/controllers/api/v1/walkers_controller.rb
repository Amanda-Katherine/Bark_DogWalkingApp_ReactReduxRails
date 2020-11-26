class Api::V1::WalkersController < ApplicationController
    def index 
        walkers = Walker.all
        render json: walkers
    end
end
