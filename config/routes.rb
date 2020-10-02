Rails.application.routes.draw do
  root 'static#index'

  namespace :api do
    namespace :v1 do
      resources :motorcycles, only: %i[create update index destroy]
    end
  end
end
