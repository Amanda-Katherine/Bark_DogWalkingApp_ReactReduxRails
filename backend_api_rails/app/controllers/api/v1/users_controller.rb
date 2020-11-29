class Api::V1::UsersController < ApplicationController
    def index 
        users = User.all
        walkers = Walker.all
        owners = Owner.all
        # binding.pry
        render json: [users, walkers, owners]
    end

    def create
        user = User.create(user_params)
        binding.pry

        if user.valid? 
            render json: {user: UserSerializer.new(user)}, status: :created
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end


    private
    def user_params
        params.require(:user).permit(:name, :gender, :email, :user_type, :address, :phone_number, :username, :password, :bio, :avatar)
    end
end
