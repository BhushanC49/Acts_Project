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
import EmployeeList from '../employee/employee-list'
import { cilAlignCenter } from '@coreui/icons'
import '../../scss/Dashboardhr.css'

export default function DashboardHr() {
  return (
    <CRow>
      <h1>Organization Statistics </h1>
      <CCol xs={12}></CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Gender Distribution In The Company</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Male', 'Female', 'Other'],
                datasets: [
                  {
                    data: [300, 150, 20],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Revenue Comparison [in Crores]</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Revenue By Indian Clients',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [100, 150, 120, 89, 140, 200, 210],
                  },
                  {
                    label: 'Revenue By U.S Clients',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [120, 170, 90, 100, 160, 180, 220],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Employees On-Boarding</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Number Of Employees',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 68, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <EmployeeList></EmployeeList>
      </CCol>
    </CRow>
  )
}
