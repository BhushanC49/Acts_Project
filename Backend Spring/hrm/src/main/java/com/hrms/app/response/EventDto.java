package com.hrms.app.response;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class EventDto {
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