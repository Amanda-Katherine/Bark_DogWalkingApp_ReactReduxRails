# class UserSerializer < ActiveModel::Serializer
#   attributes :id
# end

class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :email, :userType, :address, :phoneNumber, :username, :password, :bio, :avatar
  belongs_to :userable, polymorphic: true

    class Api::V1::OwnerSerializer < ActiveModel::Serializer
      attributes :id, :payment    
      has_one :user, as: :userable
      has_many :dogs
    end 

    class Api::V1::WalkerSerializer < ActiveModel::Serializer
      attributes :id, :radius, :rating    
      has_one :user, as: :userable
      has_many :appointments
    end 
end 