class Api::V1::DogSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :owner
  has_many :play_dates
  has_many :walkers, through: :play_dates
end