package com.hrms.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.hrms.app.request.DepartmentRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.service.DeaprtmentServiceImpl;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/department")
@CrossOrigin(origins = "")
public class DepartmentController {

	// service layer dependency injection(DI)
	@Autowired
	private DeaprtmentServiceImpl deptService;

	// endpoint for adding new Department details
	@PostMapping
	public ResponseEntity<?> addDeptDetails(@RequestBody @Valid DepartmentRequest deptReq) {
		try {
			// calling DeptService method for adding Department
			return new ResponseEntity<>(deptService.addDepartment(deptReq), HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("Error in controller " + e);
			// return err mesg wrapped in DTO : ApiResp
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@GetMapping("/{deptId}")
	public ResponseEntity<?> getDepartEntity(@PathVariable String deptId) {
		// call service method for fetching an department info
		return ResponseEntity.ok(deptService.getDepartment(deptId));
	}

	
	  @GetMapping 
	  public ResponseEntity<?> getAllDepartment(){
		  return ResponseEntity.ok(deptService.getAllDepartments());
	  }
	 

	@PutMapping("/{deptId}")
	public ResponseEntity<?> updateDepartmentEntity(@PathVariable String deptId,
			@RequestBody @Valid DepartmentRequest deptReq) {
		// call update department method to update department
		System.out.println("in update department method");
		return ResponseEntity.ok(deptService.updateDepartment(deptReq));
	}

	@DeleteMapping("/{deptId}")
	public ResponseEntity<?> removeDepartment(@PathVariable String deptId) {
		System.out.println("in delete department method");
		return ResponseEntity.ok(deptService.removeDepartment(deptId));
	}
}
