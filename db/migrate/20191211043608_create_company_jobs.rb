class CreateCompanyJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :company_jobs do |t|
      t.integer :company_id, null: false
      t.integer :job_id, null: false
      t.integer :number, null: false

      t.timestamps
    end
  end
end
