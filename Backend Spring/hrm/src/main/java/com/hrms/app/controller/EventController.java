package com.hrms.app.controller;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.hrms.app.request.EventRequest;
import com.hrms.app.response.EventDto;
import com.hrms.app.service.EventServiceImpl;
@RestController
@RequestMapping("/events")
public class EventController {

	@Autowired
    private EventServiceImpl eventService;

    @PostMapping("/add")
    public ResponseEntity<?> addEvent(@ModelAttribute EventRequest eventRequest,
                                      @RequestParam("bannerFile") MultipartFile bannerFile) {
        try {
            EventDto eventDto = eventService.addEvent(eventRequest, bannerFile);
            return new ResponseEntity<>(eventDto, HttpStatus.CREATED);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to add event: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/all")
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
