
package com.hrms.app.model;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.Data;
@Data

@Document(collection = "payslips")
public class Payslip {
    @Id
    private String pslipId; 
    private String empId; 
    private int year; 
    private int month; 
    private int numberOfDays; 
    private double deduction;
    private double grossSal;
    private double netSal;
    private LocalDate salaryDate; 
    private String salStatus;
    private String recordStatus;
}
