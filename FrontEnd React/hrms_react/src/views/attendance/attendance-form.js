import React, { useState, useEffect } from 'react'
import LeaveService from '../../services/leave.api'

export default function AttendanceForm() {
  const [currentDate, setCurrentDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // send data to backend
    LeaveService.insertLeave(currentDate)
      .then((res) => {
        alert(`Your leave-form has been submitted!`)
      })
      .catch((err) => {
        alert(`An error occurred while submitting your request: ${err}`)
      })
    console.log('Form submitted:', currentDate)
  }

  // Function to get current date in 'YYYY-MM-DD' format
  const getCurrentDate = () => {
    const date = new Date()
    const formattedDate = date.toISOString().split('T')[0]
    setCurrentDate(formattedDate)
  }

  // Fetch current date when component mounts
  useEffect(() => {
    getCurrentDate()
  }, [])

  return (
    <div>
      <h1>{currentDate}</h1>
      <h1>Mark Attendance</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mark">Mark Attendance</label>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
