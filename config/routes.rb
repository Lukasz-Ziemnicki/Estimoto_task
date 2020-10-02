Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :motorcycles, only: %i[create update index destroy]
    end
  end
end
