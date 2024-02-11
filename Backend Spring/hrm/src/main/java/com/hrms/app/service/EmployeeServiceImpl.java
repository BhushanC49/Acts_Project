package com.hrms.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.hrms.app.custome_exception.ApiException;
import com.hrms.app.model.Employee;
import com.hrms.app.repo.IEmployeeRepository;
import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.request.LoginRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.EmployeeDto;

@Service
public class EmployeeServiceImpl {
	@Autowired
	private IEmployeeRepository empRepo;

	@Autowired
	private ModelMapper mapper;

	public EmployeeDto addEmployee(EmployeeRequest empReq) {
		// validate password and confirm password
		if (empReq.getConfirmPassword().equals(empReq.getPassword())) {
			// convert EmployeeRequest object to Employee
			Employee emp = mapper.map(empReq, Employee.class); 
			emp.setUserName(emp.getEmail()); 
			emp.setCreatedOn(LocalDateTime.now());
			emp.setUpdatedOn(LocalDateTime.now()); 
			emp.setLeaveBalance(24);
			// save emp object in database
			empRepo.save(emp);
			System.out.println("Employee addes with id: " + emp.getEmpId());

			return mapper.map(emp, EmployeeDto.class);
		} else {
			throw new ApiException("password doesnot match please re-enter password");
		}

	}

	public EmployeeDto getEmployee(String empId) {
		// get Employee by using empId
		Employee emp = empRepo.findById(empId).orElseThrow(() -> new RuntimeException("Invalid Emp ID!!!"));
		return mapper.map(emp, EmployeeDto.class);
	}

	public ApiResponse removeEmployee(String empId) {
		// delete Employee info
		empRepo.deleteById(empId);

		return new ApiResponse("Emp Details of emp with ID " + empId + " deleted....");
	}

	public EmployeeDto updateEmployee(EmployeeRequest empReq) {
		// convert the empReq to employee
		Employee emp = mapper.map(empReq, Employee.class);
		// update the emp using save method

		empRepo.save(emp);

		return mapper.map(emp, EmployeeDto.class);
	}

	public List<EmployeeDto> getAllEmployees(int pageNumber, int pageSize) {
		// Creates a PageRequest(imple class of Pageable : i/f for pagination)
		// based upon page no n size
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		// fetches the Page of Emps --> getContent() --> List<Emp>
		List<Employee> empList = empRepo.findAll(pageable).getContent();
		return empList.stream().map(emp -> mapper.map(emp, EmployeeDto.class)).collect(Collectors.toList());
	}

	public EmployeeDto authenticateUser(LoginRequest loginReq) {
		Employee emp = empRepo.findByUserNameAndPassword(loginReq.getUsername(), loginReq.getPassword()).orElse(null);
		System.out.println(emp);
//		if (optEmp.isPresent()) {
//			Employee e = optEmp.get();
//			return mapper.map(e, EmployeeDto.class);
//		} else {
//			return null;
//		}
		return mapper.map(emp, EmployeeDto.class);
	} 
//	public List<EmployeeDto> getEmployeeByDept(@PathVariable String deptId){
//		return null;
//	}
	 
	public List<EmployeeDto> getAllMangers(){
		List<Employee> empList = empRepo.findByDesig("Manager"); 
		System.out.println(empList);
		return empList.stream().map(emp -> mapper.map(emp, EmployeeDto.class)).collect(Collectors.toList());
	}
	
}
