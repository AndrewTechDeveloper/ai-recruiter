class Api::OccupationsController < ApplicationController
  def index
    @occupations = Occupation.all
    render 'index', formats: :json, handlers: 'jbuilder'
  end
end
