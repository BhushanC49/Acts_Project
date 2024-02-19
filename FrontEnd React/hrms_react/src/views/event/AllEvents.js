import React, { useEffect, useState, useRef } from 'react'
import { EventApiService } from '../../services/event.api'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'
import '../../scss/allEvents.css'

const AllEvents = () => {
  const [events, setEvents] = useState([])
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const invalidToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody>Couldn&rsquo;t submit Form! Please check details before submitting.</CToastBody>
    </CToast>
  )

  const successToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Success!</div>
      </CToastHeader>
      <CToastBody>Your form has been submitted successfully.</CToastBody>
    </CToast>
  )

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const eventsData = await EventApiService.getAllEvents()
      console.log('Fetched events:', eventsData)
      setEvents(eventsData.data)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  const handleDeleteEvent = async (eventId) => {
    try {
      // Make API call to delete the event by its ID
      await EventApiService.deleteEvent(eventId)
      // Remove the deleted event from the state
      setEvents(events.filter((event) => event.id !== eventId))
      addToast(successToast)
    } catch (error) {
      console.error('Error deleting event:', error)
      addToast(invalidToast)
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
              <button className="delete-btn" onClick={() => handleDeleteEvent(event.id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </div>
  )
}

export default AllEvents
