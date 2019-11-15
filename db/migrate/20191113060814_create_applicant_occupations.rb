class CreateApplicantOccupations < ActiveRecord::Migration[6.0]
  def change
    create_table :applicant_occupations do |t|
      t.integer :applicant_id, null: false, index: true
      t.integer :occupation_id, null: false, index: true
      t.integer :work_length, null: false, default: 0
      t.integer :salary, null: false, default: 0
      t.integer :position, null: false, default: 0
      t.integer :quit_reason, null: false, default: 0

      t.timestamps
    end
  end
end
