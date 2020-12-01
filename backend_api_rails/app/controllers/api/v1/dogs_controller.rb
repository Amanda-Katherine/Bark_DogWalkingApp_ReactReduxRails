class Api::V1::DogsController < ApplicationController
    def index 
        dogs = Dog.all
        render json: dogs
    end
    private

    def dog_params
        params.require(:dog).permit(:name, :gender, :breed, :age, :weight, :allergies, :behaviors)
    end
end
