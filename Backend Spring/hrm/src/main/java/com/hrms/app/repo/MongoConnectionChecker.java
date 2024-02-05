package com.hrms.app.repo ;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class MongoConnectionChecker implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(MongoConnectionChecker.class);

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void run(String... args) throws Exception {
        try {
            // Attempt to perform a basic MongoDB operation to verify the connection
            String dbName = mongoTemplate.getDb().getName();
            logger.info("Connected to MongoDB database: {}", dbName);
        } catch (Exception e) {
            logger.error("Failed to connect to MongoDB: {}", e.getMessage());
        }
    }
}
