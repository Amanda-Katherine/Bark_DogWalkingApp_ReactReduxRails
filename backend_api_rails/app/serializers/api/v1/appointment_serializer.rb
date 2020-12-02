class Api::V1::AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :address, :duration, :compensation, :available, :dogId
  belongs_to :dog
  belongs_to :walker
  has_many :owners, through: :dogs

  def dogId
    self.object.dog_id
  end

end
