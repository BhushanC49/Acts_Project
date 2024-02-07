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
  CInputGroupText,
  CRow,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import DepartmentService from '../../../services/Department.api'
import EmployeeService from '../../../services/Employee.api'

const Register = () => {
  const [departmet, setDepartment] = useState([])
  const [formdetails, setformdetails] = useState({
    id: '',
    fname: '',
    mname: '',
    lname: '',
    gender: '',
    dob: '',
    contactNo: '',
    Dept: '',
    email: '',
    uname: '',
    pass: '',
    cpass: '',
  })

  useEffect(() => {
    DepartmentService.getDepartmentList()
      .then((response) => {
        setDepartment(response.data)
      })
      .catch((error) => {
        console.error('Error fetching departments:', error)
      })
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
    console.log('Form submitted:', formdetails)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Register Employee</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="First Name"
                      autoComplete="first name"
                      id="fname"
                      name="fname"
                      value={formdetails.fname}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Middle Name"
                      autoComplete="middle name"
                      id="mname"
                      name="mname"
                      value={formdetails.mname}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Last Name"
                      autoComplete="last name"
                      id="lname"
                      name="lname"
                      value={formdetails.lname}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Gender"
                      autoComplete="gender"
                      id="gender"
                      name="gender"
                      value={formdetails.gender}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="date"
                      placeholder="dob"
                      autoComplete="date"
                      id="dob"
                      name="dob"
                      value={formdetails.dob}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
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
                    <CInputGroupText>@</CInputGroupText>
                    <CFormSelect
                      aria-label="Default select example"
                      id="Dept"
                      name="Dept"
                      value={formdetails.Dept}
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
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      id="email"
                      name="email"
                      value={formdetails.email}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      id="uname"
                      name="uname"
                      value={formdetails.uname}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      id="pass"
                      name="pass"
                      value={formdetails.pass}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Confirm password"
                      autoComplete="new-password"
                      id="cpass"
                      name="cpass"
                      value={formdetails.cpass}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Create Account</CButton>
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
