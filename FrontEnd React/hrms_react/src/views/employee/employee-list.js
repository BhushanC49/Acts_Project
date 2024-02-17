import React, { useState, useEffect, useRef } from 'react'
import EmployeeApiService from '../../services/Employee.api'
import '../../scss/employeelist.css'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from './../../assets/images/avatars/8.jpg'
function EmployeeList() {
  const [employees, setEmployees] = useState([])
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  useEffect(() => {
    //Fetch data from the server when the component mounts
    EmployeeApiService.fetchEmployees()
      .then((data) => setEmployees(data))
      .catch((error) => {
        addToast(invalidToast)
        console.error('Error setting employees:', error) // Log the error to the console
      })
  }, [])

  const invalidToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody>Couldn&rsquo;t Fetch Details ! </CToastBody>
    </CToast>
  )

  return (
    <>
      {/* <div>
        <h2 className="employee-list-heading">Employee List</h2>
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>LeaveBalance</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? ( // Check if the employee list is not empty
              employees.map((employee) => (
                <tr key={employee.empId}>
                  <td>{employee.empId}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee?.dept?.deptName}</td>
                  <td>{employee.leaveBalance}</td>
                  <td>{employee.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Employee List empty</td>
              </tr>
            )}
          </tbody>
        </table>
      </div> */}
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Employee's</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Employee</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Department</CTableHeaderCell>
                    <CTableHeaderCell>Email</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Leave balance</CTableHeaderCell>
                    <CTableHeaderCell>Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {employees.map((employee, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={avatar8} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{employee.firstName + ' ' + employee.lastName}</div>
                        <div className="small text-medium-emphasis">
                          Registered : {employee.joiningDate}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{employee?.dept?.deptName}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{employee.email}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{employee.leaveBalance}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <span>
                          <CButton type="submit" color="success">
                            update
                          </CButton>
                        </span>
                        <span>&nbsp;&nbsp;</span>
                        <span>
                          <CButton type="submit" color="danger">
                            Delete
                          </CButton>
                        </span>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default EmployeeList
