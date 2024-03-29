package com.hrms.app.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.hrms.app.model.Company;
import com.hrms.app.model.Department;
import com.hrms.app.repo.IDepartmentRepository;
import com.hrms.app.repo.IcompanyRepository;
import com.hrms.app.request.DepartmentRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.DepartmentDto;

@Service
public class DeaprtmentServiceImpl {

	@Autowired
	private IDepartmentRepository deptRepo;

	@Autowired
	private ModelMapper mapper; 
	
	@Autowired 
	private IcompanyRepository compRepo;

	public DepartmentDto addDepartment(DepartmentRequest deptReq) {

		//fetch company and then convert 
		Company comp=compRepo.findByCompanyName(deptReq.getCompanyId());
		
		// convert DepartmentRequest object to Department
		Department dept = mapper.map(deptReq, Department.class); 
		dept.setCompany(comp);
		// save dept object in database 
		dept.setActive(true);
		dept.setCreatedOn(LocalDateTime.now()); 
		dept.setUpdatedOn(LocalDateTime.now());
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

	  @GetMapping
	  public List<DepartmentDto> getAllDepartments(){
		  List<Department> depts= deptRepo.findAll();
		  return depts.
				  stream()
				  .map(dept->mapper.map(dept,DepartmentDto.class))
				  .collect(Collectors.toList());
	  }
	 
}

