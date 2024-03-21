import React, { useEffect, useState } from 'react'
import { EventApiService } from '../../services/event.api'
import Calendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../../scss/eventList.css'

const EventListPage = () => {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEvents()
  }, [])

  const formatDate = (date) => {
    if (!date) return ''
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  const fetchEvents = async () => {
    try {
      const eventsData = await EventApiService.getAllEvents()
      console.log('Fetched events:', eventsData)
      if (eventsData.data.length === 0) {
        setError('No events found')
      } else {
        const eventsWithImages = eventsData.data.map((event) => {
          if (event.bannerData) {
            return {
              ...event,
              bannerData: `data:image/png;base64,${event.bannerData}`,
            }
          } else {
            return { ...event, bannerData: null }
          }
        })
        console.log('Events with images:', eventsWithImages)
        setEvents(eventsWithImages)
      }
    } catch (error) {
      console.error('Error fetching events:', error)
      setError('Error fetching events')
    }
  }
  const eventArray = events.map((event) => ({
    title: event.title,
    start: event.startDate,
    end: event.endDate,
    venue: event.venue,
    category: event.category,
    ...event,
  }))

  const handleEventClick = (eventClickInfo) => {
    setSelectedEvent(eventClickInfo.event)
  }

  const closeModal = () => {
    setSelectedEvent(null)
  }

  return (
    <div>
      <h1>All Events</h1>
      <div className="event-list">
        {error ? (
          <p>{error}</p>
        ) : (
          <div className="calendar-container">
            <Calendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={eventArray}
              eventClick={handleEventClick} // Handle event click
            />
            {/* Modal or card to display event details */}
            {selectedEvent && (
              <div className="modal">
                <div className="modal-content">
                  <span
                    className="close"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeModal()
                    }}
                  >
                    &times;
                  </span>
                  {selectedEvent.title && (
                    <>
                      <div className="event-info">
                        <h2>{selectedEvent.title}</h2>
                        <p>Start Date: {selectedEvent.start && formatDate(selectedEvent.start)}</p>
                        <p>
                          End Date:
                          {selectedEvent.extendedProps.endDate &&
                            formatDate(selectedEvent.extendedProps.endDate)}
                        </p>
                        <p>Description: {selectedEvent.extendedProps.description}</p>
                        <p>Time: {selectedEvent.extendedProps.time}</p>
                        <p>Venue: {selectedEvent.extendedProps.venue}</p>
                        <p>Category: {selectedEvent.extendedProps.category}</p>
                      </div>
                      <div className="event-image">
                        {selectedEvent.extendedProps.bannerData && (
                          <img
                            src={selectedEvent.extendedProps.bannerData}
                            alt="Event Banner"
                            className="event-banner-image"
                          />
                        )}
                      </div>
                      {/* You can display more event details here */}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
export default EventListPage
