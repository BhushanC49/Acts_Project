import React, { useEffect, useState } from 'react'
import { EventApiService } from '../../services/event.api'

const EventListPage = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const eventsData = await EventApiService.getAllEvents()
      console.log('Fetched events:', eventsData)
      setEvents(eventsData)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  return (
    <div>
      <h1>All Events</h1>
      <div className="event-list">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="event-item">
           
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>Start Date: {event.startDate}</p>
              <p>End Date: {event.endDate}</p>
              <p>Venue: {event.venue}</p>
              <p>Category: {event.category}</p>
              {event.banner && (
                <img
                  src={`data:image/jpeg;base64,${event.banner}`}
                  alt={event.title}
                  style={{ maxWidth: '200px' }}
                />
              )}
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  )
}

export default EventListPage
