class Api::CollegesController < ApplicationController
  def index
    @colleges = College.select(:name).distinct
    @faculties = College.where(name: params[:name])
    render 'index', formats: :json, handlers: 'jbuilder'
  end
end

