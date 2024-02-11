package com.hrms.app.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Document(collection = "events")
public class Event {
    @Id
    private String id;
    
    private String companyId;
    private String title;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime eventTime;
    private String venue;
    private String bannerUrl;
    private String category;
    private boolean recordStatus;
}
