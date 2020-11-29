class Walker < ApplicationRecord
    has_one :user, as: :userable
    has_many :appointments
end
