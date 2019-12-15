class CreateApplicantExIndustries < ActiveRecord::Migration[6.0]
  def change
    create_table :applicant_ex_industries do |t|
      t.integer :applicant_id, null: false
      t.integer :industry_id, null: false

      t.timestamps
    end
  end
end
