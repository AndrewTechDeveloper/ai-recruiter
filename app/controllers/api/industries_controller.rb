class Api::IndustriesController < ApplicationController
  def index
    @industries = Industry.all
    render 'index', formats: :json, handlers: 'jbuilder'
  end
end

