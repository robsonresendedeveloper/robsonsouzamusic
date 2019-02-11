Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "welcome#index"
  resources :audios 

  get 'send_email', to: 'welcome#send_message'

  post 'send_email', to: 'welcome#send_message'

end
