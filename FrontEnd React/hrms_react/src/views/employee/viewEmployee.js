import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

import EmployeeService from '../../services/Employee.api'

const ViewEmployee = () => {
  const [employee, setEmployee] = useState()
  useEffect(() => {
    EmployeeService.getSingleEmployees('65c74a9eb4e7524ac2cd746e')
      .then((data) => {
        console.log(data)
        setEmployee(data) 
        console.log(employee)
      })
      .catch((error) => {
        console.error('Error fetching employee7:', error)
      })
  }, [])
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="8">
          <CCard>
            <CCardHeader>
              <h5>Employee Information</h5>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>
                  <strong>Employee ID:</strong> {}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Name:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Gender:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Date of Birth:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Joining Date:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Designation:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Email:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Contact Number:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Username:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Status:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Access Role:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Department:</strong>
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Leave Balance:</strong>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default ViewEmployee
