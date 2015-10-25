Rails.application.routes.draw do

	namespace :api, defaults: { format: 'json' } do
		resources :requests
	end
	
	root 'application#index'
	get '*path' => 'application#index'

end