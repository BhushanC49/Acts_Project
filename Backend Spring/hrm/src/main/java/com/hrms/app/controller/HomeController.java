package com.hrms.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import com.hrms.app.request.LoginRequest;
import com.hrms.app.response.EmployeeDto;
import com.hrms.app.service.EmployeeServiceImpl;

import jakarta.validation.Valid;


@RestController 
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

	@Autowired
	private EmployeeServiceImpl employeeService;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateLogin(@RequestBody @Valid LoginRequest loginReq) {
		try {

			// if user is present then give response as Employee_dto else throw unauthorized
			// status of resp entity 
			EmployeeDto authenticatedUser = employeeService.authenticateUser(loginReq); 
			System.out.println(authenticatedUser);
			if (authenticatedUser != null) {
				return ResponseEntity.ok(authenticatedUser);
			} else {
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An error occurred while authenticating the user");
		}

	}
}
