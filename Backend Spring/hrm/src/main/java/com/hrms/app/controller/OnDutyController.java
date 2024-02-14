package com.hrms.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.request.OnDutyRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.OnDutyDto;
import com.hrms.app.service.OnDutyServiceImpl;
import com.hrms.app.utils.AuthUtils;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/onduty") // Specify the base URL for the controller
public class OnDutyController {

	@Autowired
	private OnDutyServiceImpl onDutyService;

	@Autowired
	private AuthUtils authUtils;

	@PostMapping
	public ResponseEntity<ApiResponse> insertOnDuty(@RequestBody @Valid OnDutyRequest onDutyReq) {
		try {
			// calling LeaveService method for adding leave in database
			ApiResponse response = onDutyService.recordOnDuty(onDutyReq);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			System.out.println("Error in controller: " + e);
			// return error message wrapped in DTO: ApiResp
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@GetMapping("/onduty-list")
	public ResponseEntity<?> getOnDutyList() {
		try {
			String username=authUtils.getUsername();
			List<OnDutyDto> onDutyDtoList = onDutyService.getOnDutyList(username);
			return new ResponseEntity<>(onDutyDtoList, HttpStatus.OK);

		} catch (Exception e) {

			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}

	@PutMapping("/{onDutyId}")
	public ResponseEntity<ApiResponse> markOnDuty(@PathVariable String onDutyId) {
		try {
			ApiResponse response = onDutyService.markOnDuty(onDutyId);
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}
}
