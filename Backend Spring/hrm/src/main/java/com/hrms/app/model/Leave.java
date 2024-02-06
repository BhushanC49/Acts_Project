package com.hrms.app.model;
import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "leaves") // Collection name in MongoDB
public class Leave {
    
    @Id
    private String leaveId;
    
    @DBRef
    private Employee empId;
    
    @DBRef
    private LeaveType leaveTypeId;
    
    private LocalDate leaveStartOn;
    
    private LocalDate leaveEndOn;
    
    private int numberOfDays;
    
    private String leaveStatus;
    
    private String leaveComment;
    
    
}
