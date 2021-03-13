Rails.application.routes.draw do
  root "departments#index"
  devise_for :users
  
  resources :departments do 
    resources :products 
  end
  resources :products do
    resources :reviews
  end
end
