require File.expand_path('../boot', __FILE__)

require 'rails/all'
require 'csv'

Bundler.require(*Rails.groups)

module HenryPrecisionMachining
    class Application < Rails::Application
        config.assets.precompile << %r(.*.(?:eot|svg|ttf|woff)$)

        config.middleware.use Rack::Cors do
            allow do
                origins '*'
                resource '*',
                :headers => :any,
                :methods => [:delete, :get, :post, :put, :patch]
            end
        end
    end
end