class Issue < ApplicationRecord
  scope :search, ->(query) {
    where('lower(title) LIKE ?', "%#{query.downcase}%")
  }
  
  belongs_to :project
  
  enum :status, [ :todo, :in_progress, :done ]

  validates :status, presence: true
end
