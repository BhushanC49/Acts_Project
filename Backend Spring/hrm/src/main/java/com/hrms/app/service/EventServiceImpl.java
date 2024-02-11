package com.hrms.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hrms.app.model.Event;
import com.hrms.app.repo.IEventRepository;
import com.hrms.app.request.EventRequest;
import com.hrms.app.response.EventDto;

@Service
public class EventServiceImpl {
	
	@Autowired
	 private  IEventRepository eventRepository;
	@Autowired
	private  ModelMapper modelMapper;

    public EventDto addEvent(EventRequest request) {
    	 Event event = modelMapper.map(request, Event.class);
         event = eventRepository.save(event);
         return modelMapper.map(event, EventDto.class);
    }
	    
    public List<EventDto> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream()
                .map(event -> modelMapper.map(event, EventDto.class))
                .collect(Collectors.toList());
    }
    
    public void deleteEvent(String id) {
        eventRepository.deleteById(id);
    }
}
