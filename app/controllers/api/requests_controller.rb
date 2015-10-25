class Api::RequestsController < ApplicationController
	respond_to :json
	require 'sendgrid-ruby'

	## Create requests for quotes
	def create
		client = SendGrid::Client.new do |c|
			c.api_key = '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'
		end

		# Create email
		mail = SendGrid::Mail.new do |m|
			m.from = params[:to]
			m.from_name = params[:name]
			m.to = 'mlee@henryprecision.com'
			m.subject = params[:subject]
			m.html = params[:message]
		end

		# Add attachments
		if params[:file] 
			params[:file].each do |key, value|
				mail.add_attachment(value.path, value.original_filename)
			end
		end
	
		# Send email
		res = client.send(mail)
		
		# Render JSON response
		if res.code == 200
			render json: true
		else
			render json: { error: 'Email could not be sent' }, status: :forbidden
		end

	end
end