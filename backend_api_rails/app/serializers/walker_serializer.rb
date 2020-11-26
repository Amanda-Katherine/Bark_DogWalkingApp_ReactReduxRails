class Api::V1::WalkerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user, as: :userable
  has_many :play_dates
    class Api::V1::UserSerializer < ActiveModel::Serializer
        attributes :id
        belongs_to :userable, polymorphic: true
    end 
end 