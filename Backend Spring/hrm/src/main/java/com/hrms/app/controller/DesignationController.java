package com.hrms.app.controller;

import java.util.Arrays;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.model.Designation;

@RestController 
@RequestMapping("/designation")
@CrossOrigin(origins = "http://localhost:3000")
public class DesignationController {
	
	@GetMapping
    public ResponseEntity<?> getAllDesignations() {
        // Convert enum values to a list of strings
		System.out.println(Arrays.asList(Designation.values()));
        return ResponseEntity.ok(Arrays.asList(Designation.values()));
    }
}
