class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :userable, polymorphic: true
end 