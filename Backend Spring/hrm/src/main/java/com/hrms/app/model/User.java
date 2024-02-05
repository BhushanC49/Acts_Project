package com.hrms.app.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
@Data
@Document(collection = "users")
public class User {
	
	@Id
	private String id;
	private String firstName;
	private String lastName;
	private String userName;
	private String password;
	private LocalDateTime createdOn;
	private LocalDateTime updatedOn;

}
