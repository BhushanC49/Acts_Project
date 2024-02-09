import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import DepartmentService from '../../services/Department.api'
import EmployeeService from '../../services/Employee.api'

const Register = () => {
  const [departmet, setDepartment] = useState([])
  const [formdetails, setformdetails] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dob: '',
    contactNo: '',
    dept: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  useEffect(() => {
    // DepartmentService.getDepartmentList()
    //   .then((response) => {
    //     setDepartment(response.data)
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching departments:', error)
    //   })
  }, [])

  const handleInputChange = (e) => {
    setformdetails({
      ...formdetails,
      [e.target.name]: e.target.value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    EmployeeService.addEmployee(formdetails)
      .then((responseData) => {
        console.log('Employee added successfully:', responseData)
      })
      .catch((error) => {
        console.error('Error adding employee:', error.message)
      })
    console.log('Form submitted:', formdetails)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4" style={{ width: '100%' }}>
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Add Employee</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CRow className="mb-3">
                    <CCol>
                      <CInputGroup>
                        <CFormInput
                          placeholder="First Name"
                          autoComplete="first name"
                          id="firstName"
                          name="firstName"
                          value={formdetails.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol>
                      <CInputGroup>
                        <CFormInput
                          placeholder="Middle Name"
                          autoComplete="middle name"
                          id="middleName"
                          name="middleName"
                          value={formdetails.middleName}
                          onChange={handleInputChange}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol>
                      <CInputGroup>
                        <CFormInput
                          placeholder="Last Name"
                          autoComplete="last name"
                          id="lastName"
                          name="lastName"
                          value={formdetails.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      placeholder="gender"
                      autoComplete="gender"
                      id="gender"
                      name="gender"
                      value={formdetails.gender}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="date"
                      placeholder="dob"
                      autoComplete="dob"
                      id="dob"
                      name="dob"
                      value={formdetails.dob}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="number"
                      placeholder="Contact No"
                      autoComplete="contact no"
                      id="contactNo"
                      name="contactNo"
                      value={formdetails.contactNo}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect
                      aria-label="Default select example"
                      id="dept"
                      name="dept"
                      value={formdetails.dept}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Department</option>
                      {departmet.map((departmet) => (
                        <option key={departmet.id} value={departmet.name}>
                          {departmet.name}
                        </option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      placeholder="email"
                      autoComplete="email"
                      id="email"
                      name="email"
                      value={formdetails.email}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="password"
                      placeholder="password"
                      autoComplete="new-password"
                      id="password"
                      name="password"
                      value={formdetails.password}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CFormInput
                      type="password"
                      placeholder="Confirm password"
                      autoComplete="new-password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formdetails.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">
                      Add employee
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
