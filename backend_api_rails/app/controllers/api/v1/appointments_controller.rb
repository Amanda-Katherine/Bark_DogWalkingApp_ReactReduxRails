class Api::V1::AppointmentsController < ApplicationController
    def index 
        appointments = Appointment.all
        render json: appointments
    end
end