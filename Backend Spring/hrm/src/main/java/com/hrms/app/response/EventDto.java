package com.hrms.app.response;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.web.multipart.MultipartFile;

@Data
public class EventDto {
    private String id;
    private String title;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime time;
    private String venue;
    private String category;
    private byte[] bannerData;
}