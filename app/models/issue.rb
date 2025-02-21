class Issue < ApplicationRecord
  belongs_to :project
  
  enum :status, [ :todo, :in_progress, :done ]

  validates :status, presence: true
end
