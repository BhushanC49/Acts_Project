import React, { useRef, useState, useEffect } from 'react'
import '../../scss/attendanceform.css'
import AttendanceService from 'src/services/attendance.api'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'

export default function AttendanceForm() {
  const [currentDate, setCurrentDate] = useState('')
  const [presentDays, setPresentDays] = useState([])
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send data to backend
    AttendanceService.markAttendance(data)
      .then((res) => {
        // alert(`Your Attendance Is marked Successfully!`)
        addToast(successToast)
      })
      .catch((err) => {
        addToast(invalidToast)
        alert(`An error occurred while submitting your request: ${err}`)
      })
    console.log('Form submitted:')
  }

  // Function to get current date in 'YYYY-MM-DD' format
  const getCurrentDate = () => {
    const date = new Date()
    const formattedDate = date.toISOString().split('T')[0]
    setCurrentDate(formattedDate)
  }
  const data = {
    date: currentDate,
  }
  // Fetch present days data when component mounts
  useEffect(() => {
    getCurrentDate()
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

  const renderCalendar = () => {
    const currentDateObj = new Date(currentDate)
    const daysInMonth = new Date(
      currentDateObj.getFullYear(),
      currentDateObj.getMonth() + 1,
      0,
    ).getDate()

    const calendarDays = []
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDateObj.getFullYear(), currentDateObj.getMonth(), i)
      const dayOfWeek = date.getDay()
      const dateString = `${currentDateObj.getFullYear()}-${currentDateObj.getMonth() + 1}-${i}`
      const isPresent = presentDays.includes(dateString)

      let attendanceStatus = ''

      // Check if it's a weekend (Saturday or Sunday)
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        attendanceStatus = 'H' // Mark weekends as holidays
      } else if (isPresent) {
        attendanceStatus = 'P' // Present days
      } else if (date <= currentDateObj) {
        attendanceStatus = 'A' // Mark previous days till current date as absent
      }

      calendarDays.push(
        <div key={i} className={`calendar-day ${attendanceStatus}`}>
          <span className="day-number">{i}</span>
          <span className="attendance-status">{attendanceStatus}</span>
        </div>,
      )
    }
    return calendarDays
  }

  return (
    <>
      <div className="attendance-form-container">
        <h1 className="form-title">Mark Attendance</h1>
        <div className="form-content">
          <p className="current-date">Today&rsquo;s Date: {currentDate}</p>
          <form onSubmit={handleSubmit}>
            <div className="calendar-container">{renderCalendar()}</div>
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
