package com.portfolio.backend.controller;

import com.portfolio.backend.model.Proposal;
import com.portfolio.backend.repository.ProposalRepository;
import com.portfolio.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/proposals")
public class ProposalController {

    private final ProposalRepository proposalRepository;
    private final EmailService emailService;

    @Autowired
    public ProposalController(ProposalRepository proposalRepository, EmailService emailService) {
        this.proposalRepository = proposalRepository;
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<?> createProposal(@RequestBody Proposal proposal) {
        try {
            // Validation
            if (proposal.getName() == null || proposal.getName().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Name is required"));
            }
            if (proposal.getEmail() == null || proposal.getEmail().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Email is required"));
            }
            if (proposal.getServiceType() == null || proposal.getServiceType().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Service type is required"));
            }
            if (proposal.getMessage() == null || proposal.getMessage().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(Map.of("error", "Message is required"));
            }

            Proposal savedProposal = proposalRepository.save(proposal);

            // Send email notification asynchronously
            try {
                emailService.sendProposalNotification(
                        savedProposal.getName(),
                        savedProposal.getEmail(),
                        savedProposal.getContact(),
                        savedProposal.getServiceType(),
                        savedProposal.getMessage(),
                        savedProposal.getBudget()
                );
            } catch (Exception mailEx) {
                // Log and swallow the exception so API response still returns successfully
                System.err.println("Failed to trigger async email notification: " + mailEx.getMessage());
            }

            return ResponseEntity.status(HttpStatus.CREATED).body(savedProposal);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Failed to save proposal: " + e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<List<Proposal>> getAllProposals() {
        try {
            List<Proposal> proposals = proposalRepository.findAll();
            // Sort manually or use JPA sorting
            proposals.sort((p1, p2) -> p2.getCreatedAt().compareTo(p1.getCreatedAt()));
            return ResponseEntity.ok(proposals);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
