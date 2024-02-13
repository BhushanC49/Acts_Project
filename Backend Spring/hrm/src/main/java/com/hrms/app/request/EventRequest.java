package com.hrms.app.request;



import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.web.multipart.MultipartFile;

@Data
public class EventRequest {
    private String companyId;
    private String title;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime eventTime;
    private String venue;
    private MultipartFile bannerFile;
    private String category;
    private boolean recordStatus;
}
