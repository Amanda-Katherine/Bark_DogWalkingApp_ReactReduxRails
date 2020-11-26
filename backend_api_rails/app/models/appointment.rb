class Appointment < ApplicationRecord
    belongs_to :dog
    belongs_to :walker, required: false 
end
