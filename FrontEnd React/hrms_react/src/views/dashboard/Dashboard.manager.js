import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import LeaveApproval from '../leaveform/leave-approval-form'

export default function ManagerDashboard() {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Sprints Completion (Month wise)</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Number Of Sprints Completed',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 45, 23, 40, 59, 50, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Sprints Data Of {currentMonth} (Current Month)</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Not-Assigned', 'In-Work', 'Pending', 'Completed'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#FFCE56', '#00D8FF', '#DD1B16'],
                    data: [10, 30, 10, 70],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <LeaveApproval></LeaveApproval>
      </CCol>
    </CRow>
  )
}
