class Api::V1::OwnerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user, as: :userable
  has_many :dogs
    class Api::V1::UserSerializer < ActiveModel::Serializer
        attributes :id, :name
        belongs_to :userable, polymorphic: true
    end 
end 