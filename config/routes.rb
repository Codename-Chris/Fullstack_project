Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index,:show,:create,:update,:destroy]
    resource :session, only: [:create,:destroy]
    resources :businesses, only: [:index,:show,:create] do
      resources :reviews, only: [:index,:create,:update,:destroy]
    end
  end
end
