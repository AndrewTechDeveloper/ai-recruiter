class CreateApplicantCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :applicant_companies do |t|
      t.integer :applicant_id, null: false
      t.integer :company_id, null: false
      t.integer :company_rank, null: false
      t.integer :company_nums, null: false
      t.integer :algorithm_type, null: false

      t.timestamps
    end
  end
end
