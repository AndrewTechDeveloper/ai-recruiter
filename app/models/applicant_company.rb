class ApplicantCompany < ApplicationRecord
  belongs_to :applicant
  belongs_to :company
end
