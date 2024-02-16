import React, { useState } from 'react'
import '../../scss/leaveTypeform.css'
import leaveTypeApi from 'src/services/leaveType.api'

const AddLeaveTypeForm = () => {
  const [leaveType, setLeaveType] = useState('')
  const [maxLeaves, setMaxLeaves] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const leaveTypeData = {
      leaveType,
      maxLeaves,
    }
    try {
      const response = await leaveTypeApi.addLeaveType(leaveTypeData)
      setLeaveType('')
      setMaxLeaves('')
    } catch (error) {
      console.error('Failed to add leave type........:', error)
    }
  }

  return (
    <div className="add-leave-type-form">
      <h2>Add Leave Type</h2>
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
    </div>
  )
}

export default AddLeaveTypeForm
