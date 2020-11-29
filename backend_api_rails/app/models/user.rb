class User < ApplicationRecord
  belongs_to :userable, polymorphic: true
  has_one_attached :image
  validates :username, uniqueness: { case_sensitive: false }
  # validates :username, :email, :name, :password, :gender, :address, :phone, :bio, presence: true
  has_secure_password
end
