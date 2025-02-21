class TeamMember < ApplicationRecord
  belongs_to :team
  belongs_to :user

  enum :role, [ :member, :admin, :owner ]

  validates :role, presence: true
end
