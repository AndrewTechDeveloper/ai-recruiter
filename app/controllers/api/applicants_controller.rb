class Api::ApplicantsController < ApplicationController
  def create
    college = College.find_by(name: params[:college], faculty: params[:faculty])
    applicant = Applicant.create(applicant_params.merge(college_id: college.id))
    params[:ex_jobs].each do |ex_job|
      ApplicantExJob.create({
        applicant_id: applicant.id,
        job_id: ex_job
      })
    end
    params[:ex_industries].each do |ex_industry|
      ApplicantExIndustry.create({
        applicant_id: applicant.id,
        industry_id: ex_industry
      })
    end
    params[:jobs].each do |job|
      ApplicantJob.create({
        applicant_id: applicant.id,
        job_id: job
      })
    end
    params[:industries].each do |industry|
      ApplicantIndustry.create({
        applicant_id: applicant.id,
        industry_id: industry
      })
    end
    params[:companies].each_with_index do |company, idx|
      ApplicantCompany.create({
        applicant_id: applicant.id,
        company_id: company,
        company_rank: params[:company_ranks][idx] + 1,
        company_nums: params[:company_nums]
      })
    end
  end

  private
  def applicant_params
    params.require(:applicant).permit(
      :age,
      :college_id,
      :gender,
      :working_hours,
      :consume_day_off,
      :satisfaction,
      :motivation,
      :transparency,
      :respectable,
      :growable,
      :mentorship,
      :compliance,
      :fairness
    )
  end
end

