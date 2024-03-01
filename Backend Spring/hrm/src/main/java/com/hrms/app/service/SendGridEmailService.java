package com.hrms.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;


@Service
public class SendGridEmailService {
	
	@Autowired
	private SendGrid sendGrid; 
	
	public void sendEmail(String fromEmail, String toEmail, String subject, String content) {
        Email from = new Email(fromEmail);
        Email to = new Email(toEmail);
        Content emailContent = new Content("text/plain", content);
        Mail mail = new Mail(from, subject, to, emailContent);

        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());

            Response response = sendGrid.api(request);
            System.out.println("Status Code: " + response.getStatusCode());
            System.out.println("Response Body: " + response.getBody());
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

}
