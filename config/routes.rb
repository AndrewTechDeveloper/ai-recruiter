Rails.application.routes.draw do
  namespace :api do
    resources :companies, only: [:index]
    resources :company_jobs, only: [:index]
    resources :industries, only: [:index]
    resources :jobs, only: [:index]
    resources :colleges, only: [:index]
    resources :applicants, only: [:create]
  end
end
