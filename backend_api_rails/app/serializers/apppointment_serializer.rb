class Api::V1::AppointmentSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :dog
  belongs_to :walker
end