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
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import DepartmentService from '../../services/Department.api'
import EmployeeService from '../../services/Employee.api'

const RegisterDept = () => {
  const [departmet, setDepartment] = useState([])
  const [formdetails, setformdetails] = useState({
    deptName: '',
    company: '',
    deptHeadEmpId: '',
    recordStatus: '',
    isActive: '',
    createdOn: '',
    updatedOn: '',
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
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4" style={{ width: '100%' }}>
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Add Department</h1>
                  <p className="text-medium-emphasis">Create new Department</p>
                  <CRow className="mb-3">
                    <CCol md={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          Dept Name&nbsp;&nbsp;&nbsp;
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Department Name"
                          //autoComplete="departmentName"
                          id="departmentName"
                          name="departmentName"
                          value={formdetails.departmentName}
                          onChange={handleInputChange}
                          required
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3"> 
                    <CCol md={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Dept Head Id</CInputGroupText>                        <CFormInput
                          placeholder="Department Head Employee Id"
                          autoComplete="deptHeadEmpId"
                          id="deptHeadEmpId"
                          name="deptHeadEmpId"
                          value={formdetails.deptHeadEmpId}
                          onChange={handleInputChange}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CCol md={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          Record Status&nbsp;&nbsp;&nbsp;
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Record Status"
                          autoComplete="recordStatus"
                          id="recordStatus"
                          name="recordStatus"
                          value={formdetails.recordStatus}
                          onChange={handleInputChange}
                          required
                        />
                    </CInputGroup>
                    </CCol>
                  {/* </CRow>
                  <CRow className="mb-3"> */}
                    <CCol md={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Is Active</CInputGroupText>
                        <CFormInput
                          placeholder="Is Active"
                          autoComplete="isActive"
                          id="isActive"
                          name="isActive"
                          value={formdetails.isActive}
                          onChange={handleInputChange}
                        />
                    </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Create On</CInputGroupText>
                        <CFormInput
                          type="date"
                          placeholder="Created On"
                          autoComplete="createdOn"
                          id="createdOn"
                          name="createdOn"
                          value={formdetails.createdOn}
                          onChange={handleInputChange}
                        />
                      </CInputGroup>
                    {/* </CRow>
                    <CRow className="mb-3"> */}
                      <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">updated On</CInputGroupText>
                      <CFormInput
                        type="date"
                        placeholder="Updated On"
                        autoComplete="updatedOn"
                        id="updatedOn"
                        name="updatedOn"
                        value={formdetails.updatedOn}
                        onChange={handleInputChange}
                      />
                      </CInputGroup>
                    </CRow>
                    <CRow className="mb-3">
                      <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Select Company</CInputGroupText>
                      <CFormSelect
                        aria-label="Default select example"
                        id="company"
                        name="company"
                        value={formdetails.company}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Company</option>
                        {departmet.map((departmet) => (
                          <option key={departmet.id} value={departmet.name}>
                            {departmet.name}
                          </option>
                        ))}
                    </CFormSelect>
                  </CInputGroup>
                  </CRow>
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
