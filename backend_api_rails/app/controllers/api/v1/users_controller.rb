class Api::V1::UsersController < ApplicationController
    def index 
        users = User.all
        walkers = Walker.all.map{|walker| Api::V1::WalkerSerializer.new(walker)}
        owners = Owner.all.map{|owner| Api::V1::OwnerSerializer.new(owner)}
        users = User.all.map{|user| Api::V1::UserSerializer.new(user)}
        appointments = Appointment.all.map{|appt| Api::V1::AppointmentSerializer.new(appt)}

        render json: {users: users, walkers: walkers, owners: owners, appointments: appointments}
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

        if u.userable_type === "Walker"
            appts = u.userable.appointments

            appointments = appts.map{|apmt| Api::V1::AppointmentSerializer.new(apmt)}
            
            render json: {user: user, appointments: appointments}
        elsif u.userable_type === "Owner"
            canines = u.userable.dogs
            dogs_appointments = []
          
            canines.each do |dog| 
                dog_appts = dog.appointments
                
                dog_appts.each do |appt|
                    dogs_appointments.push(appt)
                end
            end

            dogs = canines.map{|dog| Api::V1::DogSerializer.new(dog)}
            appointments = dogs_appointments.map{|appt| Api::V1::AppointmentSerializer.new(appt)}
            
            render json: {user: user, dogs: dogs, appointments: appointments} 
        end
    end


    private
    def user_params
        params.require(:user).permit(:name, :gender, :email, :userable_type, :address, :phone, :username, :password_digest, :bio, :avatar)
    end
end
