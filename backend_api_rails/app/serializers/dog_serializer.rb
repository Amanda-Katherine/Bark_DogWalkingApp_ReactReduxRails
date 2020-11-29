# class DogSerializer < ActiveModel::Serializer
#   attributes :id
# end

class Api::V1::DogSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :owner
  has_many :appointments
  has_many :walkers, through: :appointments
end