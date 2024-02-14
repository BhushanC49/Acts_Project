import React, { useState, useEffect } from 'react'
import LeaveService from 'src/services/leave.api'
import '../../scss/leaveApproval.css'

const LeaveApproval = () => {
  const [leaveData, setLeaveData] = useState([])
  const [error, setError] = useState('')
  // const [managerId, setManagerId] = useState('')

  useEffect(() => {
    // Fetch leave data from the API when the component mounts
    fetchLeaveData()
  }, [])

  const fetchLeaveData = () => {
    // Call your API service to fetch leave data with managerId as a parameter

    LeaveService.fetchLeaves()
      .then((data) => {
        setLeaveData(data)
      })
      .catch((error) => {
        setError('Error fetching leave data')
        console.error('Error fetching leave data:', error)
      })
  }

  const handleApprove = (leaveId) => {
    // Send approval request to the backend for the specified leaveId
    LeaveService.approveLeave(leaveId)
      .then((response) => {
        console.log('Leave approved:', response)
        // If you want to update the UI after approval, you can remove the approved leave from the list
        setLeaveData(leaveData.filter((leave) => leave.leaveId !== leaveId))
      })
      .catch((error) => {
        setError('Error approving leave')
        console.error('Error approving leave:', error)
      })
  }

  return (
    <div className="leave-approval-container">
      <h2>Leave Approval</h2>
      {/* <div className="manager-id-input">
        <label htmlFor="managerId">Manager ID:</label>
        <input
          type="text"
          id="managerId"
          value={managerId}
          onChange={(e) => setManagerId(e.target.value)}
        />
      </div> */}
      {error && <p className="error-message">{error}</p>}
      <div className="leave-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Leave ID</th>
              <th>Leave Type</th>
              <th>Leave Start Date</th>
              <th>Leave End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave) => (
              <tr key={leave.leaveId}>
                <td>
                  {leave.firstName} {leave.lastName}
                </td>
                <td>{leave.leaveId}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.leaveStartOn}</td>
                <td>{leave.leaveEndOn}</td>
                <td>
                  <button onClick={() => handleApprove(leave.leaveId)}>Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeaveApproval
