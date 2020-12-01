class Appointment < ApplicationRecord
    belongs_to :dog
    belongs_to :walker, required: false 
    has_many :owners, through: :dog
end
