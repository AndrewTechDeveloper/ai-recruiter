class ApplicantIndustry < ApplicationRecord
  belongs_to :applicant
  belongs_to :industry
end
