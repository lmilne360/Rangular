Rails.application.routes.draw do
  root to: 'app#index'

  resources :exercises

  get '*path' => 'app#index'
end
