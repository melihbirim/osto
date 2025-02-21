class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :status, default: 0, null: false

      t.timestamps
    end

    add_reference :issues, :project, foreign_key: true
  end
end