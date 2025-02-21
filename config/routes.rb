Rails.application.routes.draw do
  devise_for :users
  
  root "teams#index"
  
  resources :teams do
    resources :projects, shallow: true
  end
  
  resources :projects, only: [] do
    resources :issues, shallow: true
  end
end
