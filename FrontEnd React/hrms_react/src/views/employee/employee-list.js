import React, { useState, useEffect, useRef } from 'react'
import EmployeeApiService from '../../services/Employee.api'
import { useNavigate } from 'react-router-dom'
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
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import { cilPeople } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import useRedirect from '../pages/login/useRedirect'
import { useLocation } from 'react-router-dom'
import avatar8 from './../../assets/images/avatars/8.jpg'
function EmployeeList() {
  const [employees, setEmployees] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const navigate = useNavigate()

  let { pathname } = useLocation()
  useRedirect(pathname)

  const updateEmployee = (empId) => {
    navigate(`/update-employee/${empId}`)
  }

  const deleteEmployee = (empId) => {
    EmployeeApiService.deleteEmployee(empId)
      .then((data) => console.log(data))
      .catch((error) => {
        addToast(invalidToast)
        console.error('Error setting employees:', error) // Log the error to the console
      })
  }
  const fetchEmployees = (pageNumber, pageCount) => {
    EmployeeApiService.fetchEmployees(pageNumber, pageCount)
      .then((data) => setEmployees(data))
      .catch((error) => {
        addToast(invalidToast)
        console.error('Error setting employees:', error)
      })
  }
  useEffect(() => {
    fetchEmployees(currentPage, pageSize)
  }, [currentPage, pageSize])

  const invalidToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody>Couldn&rsquo;t Fetch Details ! </CToastBody>
    </CToast>
  )
  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Employees</CCardHeader>
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
                    <CTableHeaderCell className="text-center">Leaves Remaining</CTableHeaderCell>
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
                          <CButton
                            type="button"
                            color="success"
                            onClick={() => {
                              updateEmployee(employee.empId)
                            }}
                          >
                            Update
                          </CButton>
                        </span>
                        <span>&nbsp;&nbsp;</span>
                        <span>
                          <CButton
                            type="button"
                            color="danger"
                            onClick={() => {
                              deleteEmployee(employee.empId)
                            }}
                          >
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
      <CPagination aria-label="Page navigation example">
        <CPaginationItem
          onClick={() => handlePaginationClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </CPaginationItem>
        {[1, 2, 3].map((page) => (
          <CPaginationItem
            key={page}
            onClick={() => handlePaginationClick(page)}
            active={page === currentPage}
          >
            {page}
          </CPaginationItem>
        ))}
        <CPaginationItem
          onClick={() => handlePaginationClick(currentPage + 1)}
          disabled={currentPage === 3}
        >
          Next
        </CPaginationItem>
      </CPagination>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default EmployeeList
