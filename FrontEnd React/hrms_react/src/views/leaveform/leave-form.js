import React, { useState, useEffect } from 'react'
import LeaveService from '../../services/leave.api'

function LeaveForm() {
  // State variables
  const [leaveTypes, setLeaveTypes] = useState([])
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    comment: '',
  })

  // Fetch leave types from mock database
  useEffect(() => {
    LeaveService.fetchLeaveTypes()
      .then((response) => {
        setLeaveTypes(response.data)
      })
      .catch((error) => {
        console.error('Error fetching leave types:', error)
      })
  }, [])

  // Handle form input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform form submission logic (e.g., send data to backend)
    console.log('Form submitted:', formData)
  }

  return (
    <div className="container">
      <h2 className="text-center mb-4">Leave Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="leaveType">Leave Type</label>
          <select
            className="form-control"
            id="leaveType"
            name="leaveType"
            value={formData.leaveType}
            onChange={handleInputChange}
          >
            <option value="">Select Leave Type</option>
            {leaveTypes.map((leaveType) => (
              <option key={leaveType.id} value={leaveType.name}>
                {leaveType.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Leave Start Date</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Leave End Date</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            className="form-control"
            id="comment"
            name="comment"
            rows="3"
            value={formData.comment}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default LeaveForm
