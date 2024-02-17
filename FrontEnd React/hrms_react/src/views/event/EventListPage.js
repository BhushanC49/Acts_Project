import React, { useEffect, useState } from 'react'
import { EventApiService } from '../../services/event.api'
import Calendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../../scss/eventList.css'

const EventListPage = () => {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    fetchEvents()
  }, [])
  const formatDate = (date) => {
    if (!date) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const fetchEvents = async () => {
    try {
      const eventsData = await EventApiService.getAllEvents()
      console.log('Fetched events:', eventsData)
      setEvents(eventsData.data)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  const getBannerFromLocalStorage = (eventTitle) => {
    // Retrieve image data from localStorage using event title as key
    return localStorage.getItem(eventTitle)
  }

  const eventArray = events.map((event) => ({
    title: event.title,
    start: event.startDate,
    end: event.endDate,
    venue: event.venue,
    category: event.category,
    banner: event.bannerId ? getBannerFromLocalStorage(event.title) : null,
    ...event, // Add the rest of the event properties to access in the modal
  }))

  const handleEventClick = (eventClickInfo) => {
    setSelectedEvent(eventClickInfo.event) // Set the selected event
  }

  const closeModal = () => {
    setSelectedEvent(null) // Close the modal
  }

  return (
    <div>
      <h1>All Events</h1>
      <div className="event-list">
        {events.length > 0 ? (
          <>
            <Calendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={eventArray}
              eventContent={renderEventContent}
              eventClick={handleEventClick} // Handle event click
            />
            {/* Modal or card to display event details */}
            {console.log(selectedEvent)}
            {selectedEvent && (
              <div className="modal">
                <div className="modal-content">
                 <span className="close" onClick={(e) => { e.stopPropagation(); closeModal(); }}>&times;</span>
                  {selectedEvent.title && (
                    <>
                      <div className="event-info">
                        <h2>{selectedEvent.title}</h2>
                        <p>Start Date: {selectedEvent.start && formatDate(selectedEvent.start)}</p>
                        <p>End Date: {selectedEvent.extendedProps.endDate && formatDate(selectedEvent.extendedProps.endDate)}</p>
                        <p>Venue: {selectedEvent.extendedProps.venue}</p>
                        <p>Category: {selectedEvent.extendedProps.category}</p>
                      </div>
                      <div className="event-image">
                        {selectedEvent.extendedProps.banner && (
                          <img
                            src={selectedEvent.extendedProps.banner}
                            alt={selectedEvent.extendedProps.title}
                            style={{ maxWidth: '300px' }}
                          />
                        )}
                      </div>
                      {/* You can display more event details here */}
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
  )
}

const renderEventContent = (eventInfo) => {
  return (
    <div>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      {eventInfo.event.banner && (
        <img
          src={eventInfo.event.banner}
          alt={eventInfo.event.title}
          style={{ maxWidth: '200px' }}
        />
      )}
    </div>
  )
}

export default EventListPage
