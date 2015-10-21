source 'https://rubygems.org'
ruby '2.2.3'

gem 'rails'
gem 'therubyracer' #allows you to call and manipulate JS code from Ruby
gem 'sass-rails' #SASS adapter
gem 'yui-compressor' #CSS compression
gem 'uglifier' #compacts JS files
gem 'jbuilder' #allows for building JSON structures
gem 'figaro' #allows for encrypted ENV variables
gem 'mandrill-api' #used to send out email
gem 'pg' #Postgresql
gem 'unicorn' #alternative web server
gem 'unicorn-worker-killer' #Unicorn worker killer
gem 'bower-rails' #dependency manager
gem 'angular-rails-templates' #angular template optimizer
gem 'responders' #respond with actions
gem 'rack-cors', :require => 'rack/cors' #CORS

group :development do
  gem 'guard', 			   :require => false
  gem 'guard-livereload',  :require => false
  gem 'rack-livereload'
  gem 'rb-fsevent',        :require => false
end

group :doc do
  gem 'sdoc', require: false #doc generator
end

group :production do
  gem 'rails_12factor'
  gem 'heroku-deflater' #look for gzipped versions of js and css
end