import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import useRedirect from '../pages/login/useRedirect'
import { useLocation } from 'react-router-dom'
import EmployeeService from '../../services/Employee.api'

const ViewEmployee = () => {
  //const [employee, setEmployee] = useState()
  const [activeTab, setActiveTab] = useState('personalInfo')
  const boldTextStyle = {
    fontWeight: 'bold',
  }
  const { empId } = useParams()
  const [employee, setEmployee] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dob: '',
    joiningDate: '',
    contactNo: '',
    dept: '',
    email: '',
    desig: '',
    empStatus: '',
    leaveBalance: '',
  })
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }
  useEffect(() => {
    EmployeeService.getSingleEmployees(empId)
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
    <div>
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink
            active={activeTab === 'personalInfo'}
            onClick={() => handleTabChange('personalInfo')}
          >
            Personal Information
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === 'contactDetails'}
            onClick={() => handleTabChange('contactDetails')}
          >
            Contact Details
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink active={activeTab === 'workInfo'} onClick={() => handleTabChange('workInfo')}>
            Work Information
          </CNavLink>
        </CNavItem>
      </CNav>

      <CTabContent>
        <CTabPane visible={activeTab === 'personalInfo'}>
          <CRow>
            <CCol>
              <CCard>
                <CCardBody>
                  <CRow>
                    <CCol md={5}>
                      <div>First Name</div>
                      <div style={boldTextStyle}>{employee.firstName}</div>
                      <br></br>
                      <div>Middle Name</div>
                      <div style={boldTextStyle}>{employee.middleName}</div>
                      <br></br>
                      <div>Last Name</div>
                      <div style={boldTextStyle}>{employee.lastName}</div>
                      <br></br>
                      <div>Gender</div>
                      <div style={boldTextStyle}>{employee.gender}</div>
                      <br></br>
                      <div>Date of Birth</div>
                      <div style={boldTextStyle}>{employee.dob}</div>
                      <br></br>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CTabPane>

        <CTabPane visible={activeTab === 'contactDetails'}>
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>Contact Details</CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol>
                      <CCard>
                        <CCardBody>
                          <div>Email</div>
                          <div style={boldTextStyle}>{employee.email}</div>
                          <br></br>
                          <div>Contact No </div>
                          <div style={boldTextStyle}>{employee.contactNo}</div>
                          <br></br>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CTabPane>

        <CTabPane visible={activeTab === 'workInfo'}>
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>Work Information</CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol>
                      <CCard>
                        <CCardBody>
                          <div>Designation</div>
                          <div style={boldTextStyle}>{employee.desig}</div>
                          <br></br>
                          <div>Department</div>
                          <div style={boldTextStyle}>{employee.dept.deptName}</div>
                          <br></br>
                          <div>Joining Date</div>
                          <div style={boldTextStyle}>{employee.joiningDate}</div>
                          <br></br>
                          <div>Status</div>
                          <div style={boldTextStyle}>
                            {employee.empStatus ? 'Active' : 'Inactive'}
                          </div>
                          <br></br>
                          <div>Leaves Remaining</div>
                          <div style={boldTextStyle}>{employee.leaveBalance}</div>
                          <br></br>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CTabPane>
      </CTabContent>
    </div>
  )
}

export default ViewEmployee
