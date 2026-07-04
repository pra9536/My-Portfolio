package com.portfolio.backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;

    @Value("${portfolio.admin.email}")
    private String adminEmail;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Async
    public void sendProposalNotification(String clientName, String clientEmail, String contact, String serviceType, String message, Integer budget) {
        try {
            logger.info("Starting asynchronous email notification for proposal from: {}", clientEmail);
            
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(fromEmail);
            mailMessage.setTo(adminEmail);
            mailMessage.setReplyTo(clientEmail);
            mailMessage.setSubject("New Portfolio Proposal from " + clientName);
            
            StringBuilder text = new StringBuilder();
            text.append("Hello,\n\n");
            text.append("You have received a new project proposal from your portfolio website contact form.\n\n");
            text.append("--------------------------------------------------\n");
            text.append("Client Details:\n");
            text.append("--------------------------------------------------\n");
            text.append("Name:         ").append(clientName).append("\n");
            text.append("Email:        ").append(clientEmail).append("\n");
            if (contact != null && !contact.trim().isEmpty()) {
                text.append("Contact No:   ").append(contact).append("\n");
            }
            text.append("Service Type: ").append(serviceType).append("\n");
            if (budget != null) {
                text.append("Estimated Budget: $").append(budget).append("\n");
            }
            text.append("\n--------------------------------------------------\n");
            text.append("Message / Project Description:\n");
            text.append("--------------------------------------------------\n");
            text.append(message).append("\n");
            text.append("--------------------------------------------------\n\n");
            text.append("Best regards,\n");
            text.append("Portfolio Web Application Mailer Service\n");

            mailMessage.setText(text.toString());
            
            // Set from email if needed (can fall back to SMTP login user)
            mailSender.send(mailMessage);
            
            logger.info("Email notification successfully sent to: {}", adminEmail);
        } catch (Exception e) {
            logger.error("Failed to send email notification to admin: {}", e.getMessage(), e);
        }
    }
}
