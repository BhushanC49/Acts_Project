import React, { useRef, useState } from 'react'
import '../../scss/leaveTypeform.css'
import leaveTypeApi from 'src/services/leaveType.api'
import LeaveService from 'src/services/leave.api'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'

const AddLeaveTypeForm = () => {
  const [leaveType, setLeaveType] = useState('')
  const [maxLeaves, setMaxLeaves] = useState('')
  const [error, setError] = useState('')
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
      <CToastBody>Leave-Type added successfully.</CToastBody>
    </CToast>
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    const leaveTypeData = {
      leaveType,
      maxLeaves,
    }
    try {
      // Check if the leave type already exists
      const allLeaveTypes = await LeaveService.fetchLeaveTypes()
      const existingLeaveType = allLeaveTypes.find((leave) => leave.leaveType === leaveType)
      if (existingLeaveType) {
        setError('Leave type with this name already exists.')
        return
      }
      const response = await leaveTypeApi.addLeaveType(leaveTypeData)
      setLeaveType('')
      setMaxLeaves('')
      setError('')
      addToast(successToast)
    } catch (error) {
      console.error('Failed to add leave type:', error)
      addToast(invalidToast)
    }
  }

  return (
    <div className="add-leave-type-form">
      <h2>Add Leave Type</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="leaveType">Leave Type:</label>
          <input
            type="text"
            id="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxLeaves">Max Leaves:</label>
          <input
            type="number"
            id="maxLeaves"
            value={maxLeaves}
            onChange={(e) => setMaxLeaves(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </div>
  )
}
export default AddLeaveTypeForm
