import React, { useState } from 'react'
import { EventUrl } from '../../urls/Event.url'
import HttpClientService from '../../services/http-client.service'
import '../../scss/event.css'
const AddEventForm = () => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    time: '',
    venue: '',
    bannerUrl: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await HttpClientService.post(EventUrl.addEventUrl, eventData)
      console.log('Event added successfully')
      // Optionally, you can redirect or perform any other action upon successful creation
    } catch (error) {
      console.error('Failed to add event:', error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="bannerUrl">Banner URL:</label>
        <input
          type="text"
          id="bannerUrl"
          name="bannerUrl"
          value={eventData.bannerUrl}
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
      <button type="submit">Add Event</button>
    </form>
  )
}
export default AddEventForm