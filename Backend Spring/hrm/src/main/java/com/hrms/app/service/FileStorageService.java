package com.hrms.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;
import java.util.Objects;

@Service
public class FileStorageService {

    @Autowired
    private GridFsOperations gridFsOperations;

    public String storeFile(MultipartFile file) throws IOException {
        String fileName = Objects.requireNonNull(file.getOriginalFilename());
        InputStream inputStream = file.getInputStream();
        String contentType = file.getContentType();
        return gridFsOperations.store(inputStream, fileName, contentType).toString();
    }
}
