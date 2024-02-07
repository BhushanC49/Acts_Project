package com.hrms.app.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "leavetypes") // Collection name in MongoDB
public class LeaveType {

    @Id
    private String leavetypeId;

    private String leaveType;

    private int maxLeaves;

    
}
