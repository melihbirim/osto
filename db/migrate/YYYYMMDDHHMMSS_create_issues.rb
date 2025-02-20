class CreateIssues < ActiveRecord::Migration[7.1]
  def change
    create_table :issues do |t|
      t.string :title, null: false
      t.text :description
      t.string :status, default: 'To Do'

      t.timestamps
    end
  end
end
