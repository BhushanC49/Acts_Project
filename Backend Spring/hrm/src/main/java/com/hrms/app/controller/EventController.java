package com.hrms.app.controller;

import com.hrms.app.request.EventRequest;
import com.hrms.app.response.ApiResponse;
import com.hrms.app.response.EventDto;
import com.hrms.app.service.EventServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventServiceImpl eventService;

    @PostMapping("/add")
    public ResponseEntity<?> addEvent(@RequestBody EventRequest eventRequest) {
        EventDto eventDto = eventService.addEvent(eventRequest);
        return new ResponseEntity<>(eventDto, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAllEvents() {
        List<EventDto> eventDtoList = eventService.getAllEvents();
        return eventDtoList.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(eventDtoList);
    }

    @DeleteMapping("/{eventId}")
    public ResponseEntity<?> deleteEvent(@PathVariable String eventId) {
        eventService.deleteEvent(eventId);
        return ResponseEntity.noContent().build();
    }
}
