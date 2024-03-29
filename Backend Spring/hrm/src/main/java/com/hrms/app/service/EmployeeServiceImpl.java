package com.hrms.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hrms.app.custome_exception.ApiException;
import com.hrms.app.custome_exception.ResourceNotFoundException;
import com.hrms.app.model.Department;
import com.hrms.app.model.Employee;
import com.hrms.app.model.Project;
import com.hrms.app.repo.IDepartmentRepository;
import com.hrms.app.repo.IEmployeeRepository;
import com.hrms.app.repo.IProjectRepository;
import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.request.LoginRequest;
import com.hrms.app.request.UpdateEmpRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.EmployeeDto;
import com.hrms.app.response.EmployeePageDto;

@Service
public class EmployeeServiceImpl {
	@Autowired
	private IEmployeeRepository empRepo;

	@Autowired
	private IDepartmentRepository deptRepo;

	@Autowired
	private IProjectRepository proRepo;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private PasswordEncoder passwordEncoder; 
	
	@Autowired
	private SendGridEmailService emailService;

	public EmployeeDto addEmployee(EmployeeRequest empReq) {
		// validate password and confirm password
		Optional<Employee> e = empRepo.findByUserName(empReq.getEmail());
		if (e.isPresent()) {
			throw new ApiException("Employee with Email id: " + empReq.getEmail() + " Already registered");
		}
		if (empReq.getConfirmPassword().equals(empReq.getPassword())) {
			// convert EmployeeRequest object to Employee
			Department dept = deptRepo.findById(empReq.getDept())
					.orElseThrow(() -> new ResourceNotFoundException("invalid department"));
			// empReq.setPassword(encoder.encode(empReq.getPassword()));
			Employee emp = mapper.map(empReq, Employee.class); 
			String password = emp.getPassword();
			emp.setPassword(passwordEncoder.encode(emp.getPassword()));
			emp.setDept(dept);
			emp.setUserName(emp.getEmail());
			emp.setCreatedOn(LocalDateTime.now());
			emp.setUpdatedOn(LocalDateTime.now());
			emp.setLeaveBalance(24);
			emp.setEmpStatus(true);
			// save emp object in database
			empRepo.save(emp);
			System.out.println("Employee addes with id: " + emp.getEmpId()); 
			String subject = "Account Registration Successful";
			String content = "Dear " + emp.getFirstName() + " " + emp.getLastName() +
			        ",\n\nThank you for registering! Your account has been successfully created.\n" +
			        "\nYour login details are as follows:" +
			        "\nUsername: " + emp.getUserName() +
			        "\nPlease note that for security reasons, we do not include your password in this email." +
			        "\nYou can set or reset your password by visiting our secure password recovery page." +
			        "\n\nThank you for choosing our service!\n\nBest regards,\nThe CDAC Pune Team";

			emailService.sendEmail("amar.d.phadatare@gmail.com",emp.getEmail(), subject, content);
			return mapper.map(emp, EmployeeDto.class);
		} else {
			throw new ApiException("password doesnot match please re-enter password");
		}

	}

	public EmployeeDto getEmployee(String empId,String userName) {
		// get Employee by using empId  
		if(empId.equals("empId"))
		{
		System.out.println(userName);
		Employee emp = empRepo.findByUserName(userName).orElseThrow(() -> new RuntimeException("Invalid Emp login!!!"));
		return mapper.map(emp, EmployeeDto.class);
		} 
		else {
			Employee emp = empRepo.findById(empId).orElseThrow(() -> new RuntimeException("Invalid Emp login!!!"));
			return mapper.map(emp, EmployeeDto.class);
		}
		
	}

	public ApiResponse removeEmployee(String empId) {
		// delete Employee info
		empRepo.deleteById(empId);

		return new ApiResponse("Emp Details of emp with ID " + empId + " deleted....");
	}

	public EmployeeDto updateEmployee(UpdateEmpRequest empReq) {
		// convert the empReq to employee
		System.out.println(empReq);
		Employee emp1=empRepo.findById(empReq.getEmpId())
				.orElseThrow(() -> new ResourceNotFoundException("invalid employee id"));
		Department dept = deptRepo.findById(empReq.getDept())
				.orElseThrow(() -> new ResourceNotFoundException("invalid department"));
		Employee emp = mapper.map(empReq, Employee.class);
		emp.setDept(dept);
		List<String> projectIds = empReq.getProjects();
		List<Project> projectList = projectIds.stream().map(proRepo::findById).filter(Optional::isPresent)
				.map(Optional::get).collect(Collectors.toList());
		emp.setProjects(projectList);
		emp.setUserName(emp.getEmail());
		emp.setUpdatedOn(LocalDateTime.now());
		emp.setLeaveBalance(24); 
		emp.setPassword(emp1.getPassword());
		emp.setEmpStatus(true);
		// update the emp using save method
		System.out.println(emp);
		empRepo.save(emp);

		return mapper.map(emp, EmployeeDto.class);
	}

	public EmployeePageDto getAllEmployees(int pageNumber, int pageSize, String username) {
		// Creates a PageRequest(imple class of Pageable : i/f for pagination)
		// based upon page no n size
		Optional<Employee> o = empRepo.findByUserName(username);
		if (o.isPresent()) {
			Employee employee = o.get();
			String desig = employee.getDesig(); 
			Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("createdOn").descending());
			List<Employee> empList =null; 
			long totalPages = 0;
			// fetches the Page of Emps --> getContent() --> List<Emp> 
			if("Manager".equalsIgnoreCase(desig)) { 
				String managerId = employee.getEmpId();
				Page<Employee> empl= empRepo.findByManager(managerId,pageable); 
				empList=empl.getContent(); 
				totalPages=empl.getTotalPages();
			}
			else { 
				Page<Employee> empl= empRepo.findAll(pageable);
				empList=empl.getContent(); 
				totalPages=empl.getTotalPages();
			} 
			List<EmployeeDto> list= empList.stream().map((Employee emp) -> {
				// Department dept=emp.getDept();
				EmployeeDto empDto = mapper.map(emp, EmployeeDto.class);
				// empDto.setDept(dept.getDeptName());
				return empDto;
			}).collect(Collectors.toList()); 
			EmployeePageDto paginatedEmployees=new EmployeePageDto(); 
			paginatedEmployees.setEmployeeList(list); 
			paginatedEmployees.setTotalPages((int)totalPages);
			return paginatedEmployees;
		}
		else {
			throw new ResourceNotFoundException("employee not found");
		}
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

	public List<EmployeeDto> getAllMangers() {
		List<Employee> empList = empRepo.findByDesig("Manager");
		System.out.println(empList);
		return empList.stream().map(emp -> mapper.map(emp, EmployeeDto.class)).collect(Collectors.toList());
	}

}
