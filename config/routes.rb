Rails.application.routes.draw do
  root to: 'app#index'

  resources :exercises
end
