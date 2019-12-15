class Company < ApplicationRecord
  has_many :company_jobs
  has_one :industry, primary_key: 'industry_id', foreign_key: 'id'
end
