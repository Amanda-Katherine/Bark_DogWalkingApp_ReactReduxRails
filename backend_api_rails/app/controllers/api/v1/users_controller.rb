class Api::V1::UsersController < ApplicationController
    def index 
        users = User.all
        walkers = Walker.all.map{|walker| Api::V1::WalkerSerializer.new(walker)}
        owners = Owner.all.map{|owner| Api::V1::OwnerSerializer.new(owner)}
        users = User.all.map{|user| Api::V1::UserSerializer.new(user)}
       
        render json: {users: users, walkers: walkers, owners: owners}
    end

    def create
        user = User.create(user_params)
        user.password = params[:password]
        user.userable_type = params[:userType]
        
        klass = params[:userType].classify.safe_constantize.new
       
        klass.user = user
        serialized_user = Api::V1::UserSerializer.new(user)
        
        if (params[:userType] === "Walker")
            klass.radius = params[:radius]
            walker = Api::V1::WalkerSerializer.new(klass)
        elsif (params[:userType] === "Owner")
            klass.payment = params[:payment]
            owner = Api::V1::OwnerSerializer.new(klass)
        end

        if user.valid? && klass.valid? 
            user.save
            klass.save
            (params[:userType] === "Owner") ? render_user = {owner: owner} : render_user = {walker: walker}
            
            render json: [{user: serialized_user}, {type: render_user}], status: :created
            
        else
            render json: [{ error: 'failed to create user' }, {causation: user.errors.full_messages.push(render_user.errors.full_messages)}], status: :not_acceptable
        end
    end

    def show 
        u = User.find_by_id(params[:id])
        
        user = Api::V1::UserSerializer.new(u)

        if user.userable_type === "Walker"
            appointments = user.userable.appointments
            render json: [{user: user}, {appointments: appointments}]
        elsif user.userable_type === "Owner"
            dogs = user.userable.dogs
            dogs_appointments = []

            dogs.map do |dog| 
                dogs_appointments.push(dog.appointments)
            end
            render json: [user: user, dogs: dogs, appointments: dogs_appointments] 
        end
    end


    private
    def user_params
        params.require(:user).permit(:name, :gender, :email, :userable_type, :address, :phone, :username, :password_digest, :bio, :avatar)
    end
end
