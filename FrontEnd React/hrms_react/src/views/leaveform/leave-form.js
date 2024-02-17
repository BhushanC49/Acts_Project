import React, { useRef, useState, useEffect } from 'react'
import LeaveService from '../../services/leave.api'
import '../../scss/leaveform.css'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'

function LeaveForm() {
  // State variables
  const [leaveTypes, setLeaveTypes] = useState([])
  const [formData, setFormData] = useState({
    leaveTypeId: '',
    leaveStartOn: '',
    leaveEndOn: '',
    leaveComment: '',
  })
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const invalidToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody>
        Couldn&rsquo;t submit Form ! Please Check Details Before Submitting .{' '}
      </CToastBody>
    </CToast>
  )
  const successToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Success !</div>
      </CToastHeader>
      <CToastBody>Your form has been submitted successfully.</CToastBody>
    </CToast>
  )

  // Fetch leave types from mock database
  useEffect(() => {
    LeaveService.fetchLeaveTypes()
      .then((data) => {
        console.log(data)
        setLeaveTypes([...data])
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
    LeaveService.insertLeave(formData)
      .then((res) => {
        // alert(`Your leave-form has been submitted!`)
        addToast(successToast)
        setFormData({
          leaveTypeId: '',
          leaveStartOn: '',
          leaveEndOn: '',
          leaveComment: '',
        })
      })
      .catch((err) => {
        addToast(invalidToast)
        alert(`An error occurred while submitting your request: ${err}`)
      })
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <div className="leave-form-container">
        <h2 className="form-title">Leave Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <label htmlFor="employeeId">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
          /> */}
          </div>
          <div className="form-group">
            <label htmlFor="leaveType">Leave Type</label>
            <select
              className="form-control"
              id="leaveTypeId"
              name="leaveTypeId"
              value={formData.leaveTypeId}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Leave Type</option>
              {leaveTypes.map((leaveTypes) => (
                <option key={leaveTypes.leavetypeId} value={leaveTypes.leavetypeId}>
                  {leaveTypes.leaveType}
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
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default LeaveForm
