class Dog < ApplicationRecord
  belongs_to :owner
  has_many :play_dates
  has_many :walkers, through: :play_dates
end
