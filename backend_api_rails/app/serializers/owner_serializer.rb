# class OwnerSerializer < ActiveModel::Serializer
#   attributes :id
# end

class Api::V1::OwnerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user, as: :userable
  has_many :dogs
end 