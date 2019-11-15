Rails.application.routes.draw do
  namespace :api do
    resources :jobs, only: [:index]
    resources :job_types, only: [:index]
    resources :colleges, only: [:index]
    resources :occupations, only: [:index]
  end
end
