class Applicant < ApplicationRecord
  has_one :college, :primary_key => 'college_id', :foreign_key => 'id'
  has_many :applicant_jobs, :dependent => :destroy
  has_many :applicant_industries, :dependent => :destroy
  has_many :applicant_ex_jobs, :dependent => :destroy
  has_many :applicant_ex_industries, :dependent => :destroy
  has_many :applicant_companies, :dependent => :destroy
end
