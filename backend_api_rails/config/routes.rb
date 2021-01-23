Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, except: [:new, :edit]
      resources :walkers, except: [:new, :edit]
      resources :owners, except: [:new, :edit]
      resources :dogs, except: [:new, :edit]
      resources :appointments, except: [:new, :edit]

      post "/login", to: "auth#login"
      get "/auto_login", to: "auth#auto_login"
    end
  end
end
