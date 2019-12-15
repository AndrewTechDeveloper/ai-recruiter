class CreateApplicants < ActiveRecord::Migration[6.0]
  def change
    create_table :applicants do |t|
      t.integer :age, null: false
      t.integer :college_id, null: false
      t.integer :gender, null: false
      t.integer :working_hours, null: false
      t.integer :consume_day_off, null: false
      t.integer :satisfaction, null: false
      t.integer :motivation, null: false
      t.integer :transparency, null: false
      t.integer :respectable, null: false
      t.integer :growable, null: false
      t.integer :mentorship, null: false
      t.integer :compliance, null: false
      t.integer :fairness, null: false
      t.timestamps
    end
  end
end
