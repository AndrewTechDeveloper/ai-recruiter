class Api::JobsController < ApplicationController
  def index
    @jobs = Job.all
    render 'index', formats: :json, handlers: 'jbuilder'
  end
end

