class Api::V1::DogsController < ApplicationController
    def index 
        dogs = Dog.all
        render json: dogs
    end

    def create
        dog = Dog.new(dog_params)
        dog.owner_id = params[:ownerId]
        binding.pry
        if dog.valid? 
            dog.save
            render json: {dog: dog}
        else
            render json: [{ error: 'failed to create dog' }, {causation: dog.errors.full_messages}], status: :not_acceptable
        end
    end

    private

    def dog_params
        params.require(:dog).permit(:name, :gender, :breed, :age, :weight, :allergies, :behaviors)
    end
end
