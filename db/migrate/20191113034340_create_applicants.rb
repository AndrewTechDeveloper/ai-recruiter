class CreateApplicants < ActiveRecord::Migration[6.0]
  def change
    create_table :applicants do |t|
      t.integer :age, null: false, default: 0
      t.integer :job_id, null: false
      t.integer :school_id, null: false, default: 0
      t.timestamps
    end
  end
end
