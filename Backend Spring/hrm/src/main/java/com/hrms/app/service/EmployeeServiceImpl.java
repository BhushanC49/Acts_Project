package com.hrms.app.service;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hrms.app.model.Employee;
import com.hrms.app.repo.IEmployeeRepository;
import com.hrms.app.request.EmployeeRequest;
import com.hrms.app.response.EmployeeDto;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
	@Autowired 
	private IEmployeeRepository empRepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public EmployeeDto addEmployee(EmployeeRequest empReq) {
		//validate password and confirm password  
		if(empReq.getConfirmPassword().equals(empReq.getPassword()))
		{
			//convert EmployeeRequest object to Employee
			Employee emp=mapper.map(empReq,Employee.class);  
			//save emp object in database 
			empRepo.save(emp); 
			System.out.println("Employee addes with id: "+emp.getEmpId()); 
			
			return mapper.map(emp,EmployeeDto.class);
		} 
		else {
			throw new RuntimeException("password doesnot match please re-enter password");
		}
		
	} 
	
	
	
}
