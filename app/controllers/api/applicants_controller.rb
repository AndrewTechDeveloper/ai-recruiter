class Api::ApplicantsController < ApplicationController
  def create
    pp params
    Applicant.create(applicant_params)
  end

  private
  def applicant_params
    params.require(:applicant).permit(
      :job_id,
      :school_id,
      :faculty_id,
      :age,
      :gender,
      :ex_jobs,
      :job_types,
      :industries,
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

