class AddTeamToProjects < ActiveRecord::Migration[8.0]
  def change
    add_reference :projects, :team, null: false, foreign_key: true
  end
end
