class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.integer :industry_id
      t.string :name
      t.string :link
      t.string :logo
      t.float :total_rate
      t.integer :review_nums
      t.float :working_hours
      t.float :consume_day_off
      t.float :satisfaction
      t.float :motivation
      t.float :transparency
      t.float :respectable
      t.float :growable
      t.float :mentorship
      t.float :compliance
      t.float :fairness
      t.timestamps
    end
  end
end
