package com.hrms.app.service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.hrms.app.model.Event;
import com.hrms.app.repo.IEventRepository;
import com.hrms.app.request.EventRequest;
import com.hrms.app.response.EventDto;

@Service
public class EventServiceImpl {
	
	@Autowired
    private IEventRepository eventRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private GridFsTemplate gridFsTemplate;

    @Autowired
    private MongoTemplate mongoTemplate;

    public EventDto addEvent(EventRequest eventRequest, MultipartFile bannerFile) throws IOException {
        Event event = modelMapper.map(eventRequest, Event.class);

        if (bannerFile != null && !bannerFile.isEmpty()) {
            String fileId = saveBannerFile(bannerFile);
            event.setBannerId(fileId);
        }

        event = eventRepository.save(event);
        return modelMapper.map(event, EventDto.class);
    }

    private String saveBannerFile(MultipartFile file) throws IOException {
        InputStream inputStream = file.getInputStream();
        String fileName = file.getOriginalFilename();
        String contentType = file.getContentType();

        return gridFsTemplate.store(inputStream, fileName, contentType).toString();
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
