import React, { useState, useEffect } from 'react'
import LeaveService from '../../services/leave.api'
import '../../scss/leaveform.css'

function LeaveForm() {
  // State variables
  const [leaveTypes, setLeaveTypes] = useState([])
  const [formData, setFormData] = useState({
    employeeId: '', // New field for employee ID
    leaveTypeId: '',
    leaveStartOn: '',
    leaveEndOn: '',
    leaveComment: '',
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
    console.log('e.target.name: ', e.target.name)
    console.log('e.target.value: ', e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // send data to backend
    LeaveService.insertLeave(formData.employeeId, formData)
      .then((res) => {
        alert(`Your leave-form has been submitted!`)
      })
      .catch((err) => {
        alert(`An error occurred while submitting your request: ${err}`)
      })
    console.log('Form submitted:', formData)
  }

  return (
    <div className="leave-form-container">
      <h2 className="form-title">Leave Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="leaveType">Leave Type</label>
          <select
            className="form-control"
            id="leaveType"
            name="leaveTypeId"
            value={formData.leaveTypeId}
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
            name="leaveStartOn"
            value={formData.leaveStartOn}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Leave End Date</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            name="leaveEndOn"
            value={formData.leaveEndOn}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea
            className="form-control"
            id="comment"
            name="leaveComment"
            rows="3"
            value={formData.leaveComment}
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
