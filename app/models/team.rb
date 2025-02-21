class Team < ApplicationRecord
  has_many :team_members, dependent: :destroy
  has_many :users, through: :team_members
  has_many :projects, dependent: :destroy

  validates :name, presence: true
  validates :description, presence: true
end
