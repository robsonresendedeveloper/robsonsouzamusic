class WelcomeController < ApplicationController

	before_action :set_params, only: [:send_message]

	def index

	end

	def send_message
		MessageMailer.new_message(@first_name, @email, @tel, @subject, @comment).deliver_now
		flash[:succes] = "Muito obrigado! Sua mensagem foi enviada!"
		redirect_to root_path
	end

	private

	def set_params
		if params[:first_name]
			@first_name = params[:first_name]
		else
			@first_name = nil
		end
		
		if params[:email]
			@email = params[:email]
		else
			@email = nil
		end

		if params[:tel]
			@tel = params[:tel]
		else
			@tel = nil
		end

		if params[:subject]
			@subject = params[:subject]
		else
			@subject = nil
		end

		if params[:comment]
			@comment = params[:comment]
		else
			@comment = nil
		end
	end 
end