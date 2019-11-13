class CreateJobTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :job_types do |t|
      t.integer :job_id, null: false
      t.string :name
      t.integer :type
      t.integer :numbers
      t.timestamps
    end
  end
end
