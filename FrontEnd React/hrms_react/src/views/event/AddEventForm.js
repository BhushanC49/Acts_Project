import React, { useState, useEffect } from 'react';
import { EventUrl } from '../../urls/Event.url';
import HttpClientService from '../../services/http-client.service';
import '../../scss/event.css';

const AddEventForm = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    time: '',
    venue: '',
    category: '',
  });
  const [bannerFile, setBannerFile] = useState(null);

  useEffect(() => {
    // Load banner image from localStorage when component mounts
    const storedImage = localStorage.getItem(eventData.title);
    if (storedImage) {
      setBannerFile(storedImage);
    }
  }, [eventData.title]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBannerFile(file);
    saveImageLocally(eventData.title, file); // Save image locally when selected
  };

  const saveImageLocally = (eventTitle, file) => {
    // Save the image file locally using localStorage
    try {
      const reader = new FileReader();
      reader.onload = function () {
        const imageData = reader.result;
        localStorage.setItem(eventTitle, imageData);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Failed to save image locally:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', eventData.title);
      formData.append('description', eventData.description);
      formData.append('startDate', eventData.startDate);
      formData.append('endDate', eventData.endDate);
      formData.append('time', eventData.time);
      formData.append('venue', eventData.venue);
      formData.append('category', eventData.category);
      formData.append('bannerFile', bannerFile); // Append banner file

      await HttpClientService.post(EventUrl.addEventUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set Content-Type to multipart/form-data
        },
      });
      console.log('Event added successfully');
    } catch (error) {
      console.error('Failed to add event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="main-form">
      <fieldset className="event-form">
        <h2>Add Event</h2>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={eventData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={eventData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Event Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="venue">Event Venue:</label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={eventData.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Event Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={eventData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bannerFile">Upload Banner:</label>
          <input
            type="file"
            id="bannerFile"
            name="bannerFile"
            onChange={handleFileChange}
            accept="image/*"
            // required
          />
          {bannerFile && (
            <img src={typeof bannerFile === 'string' ? bannerFile : URL.createObjectURL(bannerFile)} alt="Banner Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />
          )}
        </div>
        <button type="submit">Add Event</button>
      </fieldset>
    </form>
  );
};

export default AddEventForm;
