package com.hrms.app.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.request.OnDutyRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.service.OnDutyServiceImpl;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/onduty") // Specify the base URL for the controller
public class OnDutyController {

    @Autowired
    private OnDutyServiceImpl onDutyService;

    @PostMapping
    public ResponseEntity<ApiResponse> markOnDuty(@RequestBody @Valid OnDutyRequest onDutyReq) {
        try {
            // calling LeaveService method for adding leave in dataabse
            ApiResponse response = onDutyService.markOnDuty(onDutyReq);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.out.println("Error in controller: " + e);
            // return error message wrapped in DTO: ApiResp
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
        }
    }
}
