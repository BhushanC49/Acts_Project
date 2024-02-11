/* eslint-disable prettier/prettier */
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
  CInputGroupText,
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
import DepartmentService from '../../services/Department.api'
import CompanyApiService from '../../services/company.api'

const RegisterDept = () => {
  const [company, setCompany] = useState([])
  const [formdetails, setformdetails] = useState({
    deptName: '',
    companyId: '',
    deptHeadEmpId: '',
  })

  useEffect(() => {
    CompanyApiService.getCompaniesList()
      .then((data) => {
        setCompany([...data])
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
    DepartmentService.addDepartment(formdetails)
      .then((responseData) => {
        console.log('Department added successfully:', responseData)
      })
      .catch((error) => {
        console.error('Error adding Department:', error.message)
      })
    console.log('Form submitted:', formdetails)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} lg={7} xl={6}>
            <CCard className="mx-4" style={{ width: '100%' }}>
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Add Department</h1>
                  <p className="text-medium-emphasis">Create new Department</p>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      placeholder="Department Name"
                      //autoComplete="departmentName"
                      id="deptName"
                      name="deptName"
                      value={formdetails.deptName}
                      onChange={handleInputChange}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      placeholder="Department Head Employee Id"
                      autoComplete="deptHeadEmpId"
                      id="deptHeadEmpId"
                      name="deptHeadEmpId"
                      value={formdetails.deptHeadEmpId}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormSelect
                      aria-label="Default select example"
                      id="companyId"
                      name="companyId"
                      value={formdetails.companyId}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Company</option>
                      {company.map((company) => (
                        <option key={company.companyId} value={company.companyName}>
                          {company.companyName}
                        </option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">
                      Add Department
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

export default RegisterDept
