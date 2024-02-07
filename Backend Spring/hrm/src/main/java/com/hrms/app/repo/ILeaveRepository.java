package com.hrms.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hrms.app.model.Leave;
import com.hrms.app.request.LeaveRequest;
import com.hrms.app.response.LeaveDto;

public interface ILeaveRepository extends MongoRepository<Leave, String>{
	

	// Add leave for an employee
    //LeaveDto save(LeaveRequest leave);

    // Delete leave for an employee
    //void delete(String leaveid);
    
    @Query("SELECT   empId.leaveBalance from Leave l where l.empId = :empId ")
    int getLeaveBalance(@Param("empId") String empId);

	

}
