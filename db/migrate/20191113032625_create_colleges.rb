class CreateColleges < ActiveRecord::Migration[6.0]
  def change
    create_table :colleges do |t|
      t.string :name, null: false
      t.integer :level
      t.string :faculty
      t.timestamps
    end
  end
end
