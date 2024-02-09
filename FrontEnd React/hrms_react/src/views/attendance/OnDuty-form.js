import React, { useState } from 'react'
import '../../scss/onDuty.css' // Import the CSS file

const OnDutyForm = () => {
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [dutyType, setDutyType] = useState('')
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate From Date
    const today = new Date()
    const selectedFromDate = new Date(fromDate)
    if (selectedFromDate > today) {
      setError('From Date cannot be after today.')
      return
    }

    // Validate To Date
    const selectedToDate = new Date(toDate)
    if (selectedToDate < selectedFromDate) {
      setError('To Date cannot be before From Date.')
      return
    }
    // Validate other required fields
    if (!fromDate || !toDate || !dutyType) {
      setError('All fields are required.')
      return
    }

    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', {
      fromDate,
      toDate,
      dutyType,
      comment,
    })
  }

  return (
    <div className="form-box">
      <h1 className="form-title">Apply for On Duty</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fromDate">From Date:</label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="toDate">To Date:</label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dutyType">On Duty Type:</label>
          <select id="dutyType" value={dutyType} onChange={(e) => setDutyType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="Access Card Issue">Access Card Issue</option>
            <option value="Overseas Travel">Overseas Travel</option>
            <option value="Permission">Permission</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  )
}

export default OnDutyForm
