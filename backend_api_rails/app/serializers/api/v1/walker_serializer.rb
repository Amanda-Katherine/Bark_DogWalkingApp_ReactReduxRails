# class WalkerSerializer < ActiveModel::Serializer
#   attributes :id
# end

class Api::V1::WalkerSerializer < ActiveModel::Serializer
  attributes :id, :radius
  has_one :user, as: :userable
  has_many :appointments
end 