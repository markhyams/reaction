class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :labels, array: true, default: [], nil: false
      t.string :title, nil: false
      t.text :description
      t.timestamps
      t.integer :list_id
      t.date :due_date
    end
  end
end
