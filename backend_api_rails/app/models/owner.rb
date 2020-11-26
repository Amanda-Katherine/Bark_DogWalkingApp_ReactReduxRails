class Owner < ApplicationRecord
    has_one :user, as: :userable
    has_many :dogs
end
