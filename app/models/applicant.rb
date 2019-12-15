class Applicant < ApplicationRecord
  has_many :applicant_jobs, :dependent => :destroy
  has_many :applicant_industries, :dependent => :destroy
  has_many :applicant_ex_jobs, :dependent => :destroy
  has_many :applicant_ex_industries, :dependent => :destroy
  has_many :applicant_companies, :dependent => :destroy
end
