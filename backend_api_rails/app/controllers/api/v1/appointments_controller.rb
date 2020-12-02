class Api::V1::AppointmentsController < ApplicationController
    def index 
        appointments = Appointment.all
        render json: appointments
    end

    def create
        appointment = Appointment.new(appointment_params)
        appointment.dog_id = params[:dogId]
        
        if appointment.valid? 
            appointment.save
            render json: {appointment: appointment}
        else
            render json: [{ error: 'Failed to create appointment' }, {causation: appointment.errors.full_messages}], status: :not_acceptable
        end
    end

    private

    def appointment_params
        params.require(:appointment).permit(:date, :time, :address, :duration, :compensation)
    end
end
