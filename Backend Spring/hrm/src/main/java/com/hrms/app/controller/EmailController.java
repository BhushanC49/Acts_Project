package com.hrms.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.service.EmailService;

@RestController
public class EmailController {

	@Autowired
	private EmailService emailService;

	@PostMapping("/sendEmail")
	public String sendEmail(@RequestParam String to, @RequestParam String subject, @RequestParam String text) {
		try {
			emailService.sendSimpleMessage(to, subject, text);
			return "Email sent successfully!";
		} catch (Exception e) {
			return "Failed to send email: " + e.getMessage();
		}
	}
}
