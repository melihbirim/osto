class Project < ApplicationRecord
  belongs_to :team
  has_many :issues, dependent: :destroy
  
  validates :title, presence: true
  validates :description, presence: true
  validates :status, presence: true
  
  enum :status, [ :active, :archived ]
  
  scope :active, -> { where(status: :active) }
  scope :archived, -> { where(status: :archived) }
end