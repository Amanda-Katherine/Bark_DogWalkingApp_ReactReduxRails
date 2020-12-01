class Api::V1::AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :address, :duration, :available
  belongs_to :dog
  belongs_to :walker
  has_many :owners, through: :dogs

end
