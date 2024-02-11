import React, { useState } from 'react'
import '../../scss/onDuty.css' // Import the CSS file
import OnDutyApiService from 'src/services/onduty.api' // Import your API service

const OnDutyForm = () => {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    employeeId: '',
    fromDate: '',
    toDate: '',
    onDutyType: '',
    comment: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!formData.fromDate || !formData.toDate || !formData.onDutyType || !formData.employeeId) {
      setError('All fields are required.')
      return
    }

    const today = new Date()
    const selectedFromDate = new Date(formData.fromDate)
    const selectedToDate = new Date(formData.toDate)

    if (selectedFromDate > today) {
      setError('From Date cannot be after today.')
      return
    }

    if (selectedToDate < selectedFromDate) {
      setError('To Date cannot be before From Date.')
      return
    }

    // Send data to the service
    OnDutyApiService.markOnDuty(formData)
      .then((response) => {
        console.log('Response from service:', response)
        // Handle success response here
      })
      .catch((error) => {
        console.error('Error sending OnDutyRequest:', error)
        // Handle error response here
      })
  }

  const { employeeId, fromDate, toDate, onDutyType, comment } = formData

  return (
    <div className="form-box">
      <h1 className="form-title">Apply for On Duty</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID:</label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={employeeId}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fromDate">From Date:</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={fromDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="toDate">To Date:</label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={toDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="onDutyType">On Duty Type:</label>
          <select id="onDutyType" name="onDutyType" value={onDutyType} onChange={handleInputChange}>
            <option value="">Select Type</option>
            <option value="Access Card Issue">Access Card Issue</option>
            <option value="Overseas Travel">Overseas Travel</option>
            <option value="Permission">Permission</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={handleInputChange}
          ></textarea>
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
