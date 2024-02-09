import React, { useState, useEffect } from 'react'
import LeaveService from '../../services/leave.api'
import '../../scss/attendanceform.css'

export default function AttendanceForm() {
  const [currentDate, setCurrentDate] = useState('')
  const [employeeId, setEmployeeId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send data to backend

    LeaveService.insertLeave(employeeId, currentDate)
      .then((res) => {
        alert(`Your leave-form has been submitted!`)
      })
      .catch((err) => {
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

  // Fetch current date when component mounts
  useEffect(() => {
    getCurrentDate()
  }, [])

  // Handle input change for employee ID
  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value)
  }

  return (
    <div className="attendance-form-container">
      <h1 className="form-title">Mark Attendance</h1>
      <div className="form-content">
        <p className="current-date">Today's Date: {currentDate}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="employeeId">Employee ID: &nbsp;</label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              value={employeeId}
              onChange={handleEmployeeIdChange}
              className="employee-id-input"
            />
          </div>
          <br></br>
          <button type="submit" className="submit-button">
            Punch In
          </button>
        </form>
      </div>
    </div>
  )
}
