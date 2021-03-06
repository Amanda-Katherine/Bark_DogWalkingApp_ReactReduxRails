# class DogSerializer < ActiveModel::Serializer
#   attributes :id
# end

class Api::V1::DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :age, :breed, :avatar, :ownerId, :weight, :allergies, :behaviors
  belongs_to :owner
  has_many :appointments
  has_many :walkers, through: :appointments

  def ownerId 
    self.object.owner_id
  end
end