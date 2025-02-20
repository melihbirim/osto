Rails.application.routes.draw do
  root 'issues#index'
  resources :issues
end
