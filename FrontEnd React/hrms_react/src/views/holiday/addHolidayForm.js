import React, { useState } from 'react'
import '../../scss/holiday.css' // Import the CSS file

function HolidayForm() {
  const [holidayName, setHolidayName] = useState('')
  const [holidayFromDate, setHolidayFromDate] = useState('')
  const [holidayToDate, setHolidayToDate] = useState('')
  const [recordStatus, setRecordStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!holidayName || !holidayFromDate || !holidayToDate || !recordStatus) {
      setErrorMessage('Please fill out all fields.')
      return
    }
    console.log({
      holidayName,
      holidayFromDate,
      holidayToDate,
      recordStatus,
    })
    // Reset form fields and error message after submission
    setHolidayName('')
    setHolidayFromDate('')
    setHolidayToDate('')
    setRecordStatus('')
    setErrorMessage('')
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="holidayName">Holiday Name:</label>
          <input
            type="text"
            id="holidayName"
            value={holidayName}
            onChange={(e) => setHolidayName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="holidayFromDate">From Date:</label>
          <input
            type="date"
            id="holidayFromDate"
            value={holidayFromDate}
            onChange={(e) => setHolidayFromDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="holidayToDate">To Date:</label>
          <input
            type="date"
            id="holidayToDate"
            value={holidayToDate}
            onChange={(e) => setHolidayToDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="recordStatus">Record Status:</label>
          <select
            id="recordStatus"
            value={recordStatus}
            onChange={(e) => setRecordStatus(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  )
}

export default HolidayForm
