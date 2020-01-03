class Api::CompaniesController < ApplicationController

  def index
    @companies = Company
      .joins(:company_jobs)
      .where(industry_id: params[:industries], company_jobs: {job_id: params[:jobs]})
      .includes(:company_jobs)
      .distinct
      .order('RAND()')
    render 'index', formats: :json, handlers: 'jbuilder'
  end

  private

end
