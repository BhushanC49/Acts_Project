package com.hrms.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.app.request.HolidayRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.HolidayDto;
import com.hrms.app.service.HolidayServiceImpl;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/holiday")

public class HolidayController {

	@Autowired
	private HolidayServiceImpl holidayService;

	@PostMapping
	public ResponseEntity<?> addHoliday(@RequestBody @Valid HolidayRequest holidayReq) {
		try {
			holidayService.addHoliday(holidayReq);
			System.out.println("Holiday Added");
			return new ResponseEntity<>("Holiday Added Successfully!", HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("Error in controller " + e);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
	}
	
	@GetMapping("/get")
	public ResponseEntity<?> getAllHolidays(){
		List<HolidayDto> holiday = holidayService.getAllHolidays(); 
		System.out.println(holiday);
		return ResponseEntity.ok(holiday);
	}
}
