class Api::V1::WalkerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user, as: :userable
  has_many :play_dates
end 