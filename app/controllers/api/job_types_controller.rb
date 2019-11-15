class Api::JobTypesController < ApplicationController
  def index
    @job_types = JobType.all.select(:name).distinct
    render 'index', formats: :json, handlers: 'jbuilder'
  end
end

