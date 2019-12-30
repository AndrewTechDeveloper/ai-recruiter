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
  def AHP(jobs)
    hash_array = []
    jobs.each do |job|
      wor = job.working_hours * params[:working_hours].to_f
      cor = job.consume_day_off * params[:consume_day_off].to_f
      sat = job.satisfaction * params[:satisfaction].to_f
      mot = job.motivation * params[:motivation].to_f
      tra = job.transparency * params[:transparency].to_f
      res = job.respectable * params[:respectable].to_f
      gro = job.growable * params[:growable].to_f
      men = job.mentorship * params[:mentorship].to_f
      com = job.compliance * params[:compliance].to_f
      fai = job.fairness * params[:fairness].to_f
      evaluation = wor + cor + sat + mot + tra + res + gro + men + com + fai
      hash = {:id => job.id, :evaluation => evaluation}
      hash_array << hash
    end
    hash_array.sort_by!{ |k| k[:evaluation] }.reverse!
    return hash_array.map{|v| v[:id]}
  end

end
