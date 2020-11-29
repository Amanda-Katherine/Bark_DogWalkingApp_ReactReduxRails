class Api::V1::UsersController < ApplicationController
    def index 
        users = User.all
        walkers = Walker.all
        owners = Owner.all
        render json: [users, walkers, owners]
    end

    def create
        
        klass = params[:userType].classify.safe_constantize.new
        
        if (params[:userType] === "Walker")
            klass.radius = params[:radius]
        elsif (params[:userType] === "Owner")
            klass.payment = params[:payment]
        end
        user = User.create(user_params)
        user.password = params[:password]
        user.userable_type = params[:userType]
        
        klass.user = user

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
