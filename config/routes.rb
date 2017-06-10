Rails.application.routes.draw do
  get '/about', to: 'page#about'
  root to: 'page#index'
end
