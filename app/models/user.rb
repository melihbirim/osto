class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :team_members, dependent: :destroy
  has_many :teams, through: :team_members
  has_many :projects, through: :teams

  validates :name, presence: true
end
