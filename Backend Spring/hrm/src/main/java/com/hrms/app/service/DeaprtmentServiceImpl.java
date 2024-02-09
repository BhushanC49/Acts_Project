package com.hrms.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hrms.app.model.Department;
import com.hrms.app.repo.IDepartmentRepository;
import com.hrms.app.request.DepartmentRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.DepartmentDto;

@Service
public class DeaprtmentServiceImpl {

	@Autowired
	private IDepartmentRepository deptRepo;

	@Autowired
	private ModelMapper mapper;

	public DepartmentDto addDepartment(DepartmentRequest deptReq) {

		// convert DepartmentRequest object to Department
		Department dept = mapper.map(deptReq, Department.class);
		// save dept object in database
		deptRepo.save(dept);
		System.out.println("Department added with id: " + dept.getDeptId());
		return mapper.map(dept, DepartmentDto.class);
	}

	public DepartmentDto getDepartment(String deptId) {
		// get Department by using deptId
		Department dept = deptRepo.findById(deptId).orElseThrow(() -> new RuntimeException("Invalid Department ID!!!"));
		return mapper.map(dept, DepartmentDto.class);
	}

	public ApiResponse removeDepartment(String deptId) {
		deptRepo.deleteById(deptId);

		return new ApiResponse("Department Details with ID " + deptId + " deleted....");
	}

	public DepartmentDto updateDepartment(DepartmentRequest deptReq) {
		// convert DepartmentRequest object to Department
		Department dept = mapper.map(deptReq, Department.class);
		// update dept using save method
		deptRepo.save(dept);
		return mapper.map(dept, DepartmentDto.class);
	}

	/*
	 * public List<DepartmentDot> getAllDepartments(){
	 * 
	 * }
	 */
}

