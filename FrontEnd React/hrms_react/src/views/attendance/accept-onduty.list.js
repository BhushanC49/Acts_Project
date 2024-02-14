import React, { useState, useEffect } from 'react'
import OnDutyService from '../../services/onduty.api'
import '../../scss/onDutyList.css'

const OnDutyList = () => {
  const [onDutyList, setOnDutyList] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    // const managerId = '65c859833a567a2bd3da2559'
    fetchOnDutyList()
  }, [])

  const fetchOnDutyList = async () => {
    try {
      const data = await OnDutyService.fetchOnDutyListByManger()
      setOnDutyList(data)
    } catch (error) {
      setError('Error fetching on-duty records')
      console.error('Error fetching on-duty records:', error)
    }
  }

  const handleAccept = async (onDutyId) => {
    try {
      await OnDutyService.markOnDuty(onDutyId)
      console.log('On-duty record accepted:', onDutyId)
      // You can update the UI or handle the response here
    } catch (error) {
      setError('Error accepting on-duty record')
      console.error('Error accepting on-duty record:', error)
    }
  }

  return (
    <div className="on-duty-container">
      <h2>On Duty Records</h2>
      {error && <p className="error-message">{error}</p>}
      <table className="on-duty-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>On Duty Type</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {onDutyList.map((record) => (
            <tr key={record.onDutyId}>
              <td>{record.employeeId}</td>
              <td>{record.fromDate}</td>
              <td>{record.toDate}</td>
              <td>{record.onDutyType}</td>
              <td>{record.comment}</td>
              <td>
                <button onClick={() => handleAccept(record.onDutyId)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OnDutyList
