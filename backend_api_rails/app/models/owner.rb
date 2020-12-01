class Owner < ApplicationRecord
    has_one :user, as: :userable
    has_many :dogs
    has_many :appointments, through: :dogs

end
