class Api::JobsController < ApplicationController
  def index
    types= params[:job_types].map{|t| job_type_categorizer(t)}
    categories = params[:industries].map{|i| job_categorizer(i)}
    jobs = Job.joins(:job_types).where(category: categories, job_types: {type: types}).distinct
    ids = algorithm(jobs)
    @jobs = Job.find(ids).index_by(&:id).values_at(*ids)
    render 'index', formats: :json, handlers: 'jbuilder'
  end

  private
  def algorithm(jobs)
    p "alogorithm"
    hash_array = []
    jobs.each do |job|
      p "----- calcurate factors -----"
      p wor = job.working_hours * params[:working_hours].to_f
      p cor = job.consume_day_off * params[:consume_day_off].to_f
      p sat = job.satisfaction * params[:satisfaction].to_f
      p mot = job.motivation * params[:motivation].to_f
      p tra = job.transparency * params[:transparency].to_f
      p res = job.respectable * params[:respectable].to_f
      p gro = job.growable * params[:growable].to_f
      p men = job.mentorship * params[:mentorship].to_f
      p com = job.compliance * params[:compliance].to_f
      p fai = job.fairness * params[:fairnes].to_f
      p evaluation = wor + cor + sat + mot + tra + res + gro + men + com + fai
      hash = {:id => job.id, :evaluation => evaluation}
      hash_array << hash
    end
    pp hash_array.sort_by!{ |k| k[:evaluation] }.reverse!
    return hash_array.map{|v| v[:id]}
  end
end

