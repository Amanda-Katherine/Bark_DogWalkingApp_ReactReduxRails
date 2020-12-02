class Api::V1::AppointmentsController < ApplicationController
    def index 
        appointments = Appointment.all
        render json: appointments
    end
    def appointment_params
        params.require(:appointment).permit(:date, :time, :address, :duration, :compensation)
    end
end
