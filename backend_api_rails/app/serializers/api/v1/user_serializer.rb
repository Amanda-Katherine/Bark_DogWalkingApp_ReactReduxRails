class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :email, :userable_type, :address, :phone, :username, :password, :bio, :avatar
  belongs_to :userable, polymorphic: true

  def userType 
    self.object.userable_type
  end

    class Api::V1::OwnerSerializer < ActiveModel::Serializer
      attributes :id, :payment    
      has_one :user, as: :userable
      has_many :dogs
      has_many :appointments, through: :dogs
    end 

    class Api::V1::WalkerSerializer < ActiveModel::Serializer
      attributes :id, :radius, :rating    
      has_one :user, as: :userable
      has_many :appointments
    end 
end 