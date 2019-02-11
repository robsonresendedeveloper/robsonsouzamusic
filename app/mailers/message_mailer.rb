class MessageMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.new_message.subject
  #
  def new_message(first_name, email, tel, subject, comment)
    @name = first_name
    @email = email
    @tel = tel
    @subject = subject
    @comment = comment

    mail to: "robson.souza.mg@hotmail.com",
        subject: @subject
  end
end
