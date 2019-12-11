class CreateApplicants < ActiveRecord::Migration[6.0]
  def change
    create_table :applicants do |t|
      t.integer :age, null: false, default: 0
      t.integer :job_id, null: false, default: 0
      t.integer :school_id, null: false, default: 0
      t.integer :gender, null: false, default: 0
      t.integer :ex_jobs, null: false, default: 0
      t.integer :job_types, null: false, default: 0
      t.integer :industries, null: false, default: 0
      t.integer :working_hours, null: false, default: 0
      t.integer :consume_day_off, null: false, default: 0
      t.integer :satisfaction, null: false, default: 0
      t.integer :motivation, null: false, default: 0
      t.integer :transparency, null: false, default: 0
      t.integer :respectable, null: false, default: 0
      t.integer :growable, null: false, default: 0
      t.integer :mentorship, null: false, default: 0
      t.integer :compliance, null: false, default: 0
      t.integer :fairness, null: false, default: 0
      t.timestamps
    end
  end
end
