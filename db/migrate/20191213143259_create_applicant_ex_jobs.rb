class CreateApplicantExJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :applicant_ex_jobs do |t|
      t.integer :applicant_id, null: false
      t.integer :job_id, null: false

      t.timestamps
    end
  end
end
