import React, { useRef, useState, useEffect } from 'react'
import 'react-calendar/dist/Calendar.css' // Import calendar styles
import '../../scss/attendanceform.css'
import AttendanceService from 'src/services/attendance.api'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'
import Calendar from 'react-calendar' // Import react-calendar component

export default function AttendanceForm() {
  const [currentDate, setCurrentDate] = useState(new Date()) // Initialize currentDate with today's date
  const [presentDays, setPresentDays] = useState([])
  const [attendanceMarked, setAttendanceMarked] = useState(false)
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const successToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Success !</div>
      </CToastHeader>
      <CToastBody>Your form has been submitted successfully.</CToastBody>
    </CToast>
  )
  const invalidToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody>Error in Submitting attendance.</CToastBody>
    </CToast>
  )
  const alreadyMarkedToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody>Attendance for the day is already marked.</CToastBody>
    </CToast>
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    const currentDateStr = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`
    if (presentDays.some((item) => item.date === currentDateStr)) {
      addToast(alreadyMarkedToast)
      return
    } else {
      // Send data to backend
      const data = {
        date: currentDate,
      }
      AttendanceService.markAttendance(data)
        .then((res) => {
          setAttendanceMarked(true)
          fetchPresentDays()
          addToast(successToast)
        })
        .catch((err) => {
          addToast(invalidToast)
          alert(`An error occurred while submitting your request: ${err}`)
        })
    }
  }

  // Fetch present days data when component mounts
  useEffect(() => {
    fetchPresentDays()
  }, [])

  const fetchPresentDays = () => {
    // Fetch present days data from the backend
    AttendanceService.fetchAttendance()
      .then((data) => {
        setPresentDays(data)
      })
      .catch((error) => {
        console.error('Error fetching present days:', error)
        // Handle error appropriately, e.g., display an error message
      })
  }

  const renderTileContent = ({ date, view }) => {
    // Function to render content in calendar tiles based on presentDays data
    if (view === 'month') {
      const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      const isPresent = presentDays.some((item) => item.date === dateString)
      const dayOfWeek = date.getDay()
      let content = null

      // Check if it's a weekend (Saturday or Sunday)
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        content = <span className="holiday"></span>
      } else {
        content = <span className={`attendance-status ${isPresent ? 'present' : 'absent'}`}></span>
      }

      return content
    }
  }

  return (
    <>
      <div className="attendance-form-container">
        <h1 className="form-title">Mark Attendance</h1>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="calendar-legend-container">
              <div className="calendar-container">
                <Calendar
                  value={currentDate}
                  onChange={setCurrentDate}
                  tileContent={renderTileContent}
                />
              </div>
              <div className="legend-container">
                <div className="legend">
                  <div className="legend-item">
                    <span className="legend-color present"></span> Present
                  </div>
                  <div className="legend-item">
                    <span className="legend-color absent"></span> Absent
                  </div>
                  <div className="legend-item">
                    <span className="legend-color holiday"></span> Holiday
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button type="submit" className="submit-button">
              Punch In
            </button>
          </form>
        </div>
      </div>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}
