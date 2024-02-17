import React, { useState, useEffect, useRef } from 'react'
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
  CToast,
  CToastHeader,
  CToastBody,
  CToaster,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'
import SalaryStructureService from '../../services/SalaryStructure.api'
import DepartmentService from '../../services/Department.api'
import EmployeeService from '../../services/Employee.api'
import DesiginationApiService from '../../services/Designation.api'
import useRedirect from '../pages/login/useRedirect'
import { useLocation } from 'react-router-dom'

const Register = () => {
  const [departmet, setDepartment] = useState([])
  const [flag, setflag] = useState(true)
  const [mangers, setMangers] = useState([])
  const [toast, addToast] = useState(0)
  const [errors, setErrors] = useState('')
  const toaster = useRef()
  const [designation, setdesignation] = useState([])
  const [formdetails, setformdetails] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dob: '',
    joiningDate: '',
    contactNo: '',
    dept: '',
    email: '',
    manager: '',
    desig: '',
    password: '',
    confirmPassword: '',
  })
  const [salaryform, setsalaryform] = useState({
    empId: '',
    basicSalary: '',
    medicalAllowance: '',
    conventionalAllowance: '',
    professionTax: '',
    Tds: '',
    providuntFund: '',
    HRA: '',
    netSalary: '',
    grossSalary: '',
    bankAccountId: '',
  })

  let { pathname } = useLocation()
  useRedirect(pathname)

  const invalidLoginTost = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody> {errors} </CToastBody>
    </CToast>
  )

  useEffect(() => {
    DepartmentService.getDepartmentList()
      .then((data) => {
        console.log(data)
        setDepartment([...data])
      })
      .catch((error) => {
        console.error('Error fetching departments:', error)
      })
    DesiginationApiService.getDesignationList()
      .then((data) => {
        console.log(data)
        setdesignation([...data])
      })
      .catch((error) => {
        console.error('Error fetching departments:', error)
      })
    EmployeeService.fetchManagers()
      .then((list) => {
        console.log(list + 'in fetchManger')
        setMangers([...list])
      })
      .catch((error) => {
        console.error('Error fetching mangers:', error)
      })
  }, [])

  const handleInputChange = (e) => {
    setformdetails({
      ...formdetails,
      [e.target.name]: e.target.value,
    })

    if (!flag) {
      setsalaryform({
        ...salaryform,
        [e.target.name]: e.target.value,
      })

      const basicSalary = parseFloat(salaryform.basicSalary) || 0
      const medicalAllowance = parseFloat(salaryform.medicalAllowance) || 0
      const conventionalAllowance = parseFloat(salaryform.conventionalAllowance) || 0
      const HRA = parseFloat(salaryform.HRA) || 0
      let grossSalary = basicSalary + medicalAllowance + conventionalAllowance + HRA

      const TDS = parseFloat(salaryform.Tds) || 0
      const providuntFund = parseFloat(salaryform.providuntFund) || 0
      const professionTax = parseFloat(salaryform.professionTax) || 0

      let netSalary = grossSalary - (TDS + providuntFund + professionTax)

      // Update the state with calculated netSalary and grossSalary
      setsalaryform((prev) => ({
        ...prev,
        netSalary: netSalary.toFixed(2),
        grossSalary: grossSalary.toFixed(2),
      }))
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    EmployeeService.addEmployee(formdetails)
      .then((responseData) => {
        console.log('Employee added successfully:', responseData)
        setsalaryform((prevSalaryForm) => ({
          ...prevSalaryForm,
          empId: responseData.empId || '', // Use responseData.empId if it exists, or an empty string if not
        }))
        alert(`Employee Added Successfully!`)
        setflag(false)
      })
      .catch((error) => {
        console.error('Error adding employee:', error.message)
        addToast(invalidLoginTost)
        setErrors(error.message)
        alert(`Oops! Error in Adding Employee`)
      })
    console.log('Form submitted:', formdetails)
  }

  const handleSalarySubmit = (e) => {
    e.preventDefault()
    SalaryStructureService.addSalaryStru(salaryform)
      .then((responseData) => {
        console.log('Employee salary structure added successfully:', responseData)
        alert(`Employee salary structure Added Successfully!`)
      })
      .catch((error) => {
        console.error('Error adding employee salary structure:', error.message)
        addToast(invalidLoginTost)
        setErrors(error.message)
        alert(`Oops! Error in Adding Employee salary structure`)
      })
    console.log('Form submitted:', salaryform)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCard className="mx-4" style={{ width: '100%' }}>
              <CCardBody className="p-4">
                {flag ? (
                  <CForm onSubmit={handleSubmit}>
                    <h1>Add Employee</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            First name&nbsp;&nbsp;&nbsp;
                          </CInputGroupText>
                          <CFormInput
                            placeholder="first Name"
                            autoComplete="first name"
                            id="firstName"
                            name="firstName"
                            value={formdetails.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">Middle name</CInputGroupText>
                          <CFormInput
                            placeholder="middle Name"
                            autoComplete="middle name"
                            id="middleName"
                            name="middleName"
                            value={formdetails.middleName}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            Last name&nbsp;&nbsp;&nbsp;
                          </CInputGroupText>
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
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">Date Of Birth</CInputGroupText>
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
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </CInputGroupText>
                          <CFormSelect
                            aria-label="Default select example"
                            id="gender"
                            name="gender"
                            value={formdetails.gender}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </CFormSelect>
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">Joining Date</CInputGroupText>
                          <CFormInput
                            type="date"
                            placeholder="joiningDate"
                            autoComplete="joiningDate"
                            id="joiningDate"
                            name="joiningDate"
                            value={formdetails.joiningDate}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            Phone no&nbsp;&nbsp;&nbsp;
                          </CInputGroupText>
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
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </CInputGroupText>
                          <CFormInput
                            placeholder="email"
                            autoComplete="email"
                            id="email"
                            name="email"
                            value={formdetails.email}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">Department</CInputGroupText>
                          <CFormSelect
                            aria-label="Default select example"
                            id="dept"
                            name="dept"
                            value={formdetails.dept}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Department</option>
                            {departmet.map((departmet) => (
                              <option key={departmet.deptId} value={departmet.deptId}>
                                {departmet.deptName}
                              </option>
                            ))}
                          </CFormSelect>
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            Manager&nbsp;&nbsp;&nbsp;&nbsp;
                          </CInputGroupText>
                          <CFormSelect
                            aria-label="Default select example"
                            id="manager"
                            name="manager"
                            value={formdetails.manager}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Manager</option>
                            {mangers.map((manager) => (
                              <option key={manager.empId} value={manager.empId}>
                                {manager.firstName +
                                  ' ' +
                                  manager.lastName +
                                  ' (' +
                                  manager.desig +
                                  ')'}
                              </option>
                            ))}
                          </CFormSelect>
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            Password&nbsp;&nbsp;&nbsp;&nbsp;
                          </CInputGroupText>
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
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-4">
                          <CInputGroupText id="basic-addon1">Confirm Pass</CInputGroupText>
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
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">Designation&nbsp;</CInputGroupText>
                          <CFormSelect
                            aria-label="Default select example"
                            id="desig"
                            name="desig"
                            value={formdetails.desig}
                            onChange={handleInputChange}
                          >
                            <option value="">Select Designation</option>
                            {designation.map((designation, index) => (
                              <option key={index} value={designation}>
                                {designation}
                              </option>
                            ))}
                          </CFormSelect>
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <div className="d-grid">
                      <CButton type="submit" color="success">
                        Add employee
                      </CButton>
                    </div>
                  </CForm>
                ) : (
                  <CForm onSubmit={handleSalarySubmit}>
                    <h1>Add Employee Salary structure</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            basic salary&nbsp;&nbsp;&nbsp;
                          </CInputGroupText>
                          <CFormInput
                            placeholder="Basic Salary"
                            autoComplete="Basic Salary"
                            id="basicSalary"
                            name="basicSalary"
                            value={salaryform.basicSalary}
                            onChange={handleInputChange}
                            required
                          />
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">Medical Allowance</CInputGroupText>
                          <CFormInput
                            placeholder="Medical Allowance"
                            autoComplete="Medical Allowance"
                            id="medicalAllowance"
                            name="medicalAllowance"
                            value={salaryform.medicalAllowance}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">Profession Tax</CInputGroupText>
                          <CFormInput
                            placeholder="Profession Tax"
                            autoComplete="Profession Tax"
                            id="professionTax"
                            name="professionTax"
                            value={salaryform.profissionTax}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            Conventional Allowance
                          </CInputGroupText>
                          <CFormInput
                            placeholder="Conventional Allowance"
                            autoComplete="last name"
                            id="conventionalAllowance"
                            name="conventionalAllowance"
                            value={salaryform.conventionalAllowance}
                            onChange={handleInputChange}
                            required
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1"> Providunt Fund </CInputGroupText>
                          <CFormInput
                            placeholder="Providunt Fund"
                            autoComplete="providuntFund"
                            id="providuntFund"
                            name="providuntFund"
                            value={salaryform.providuntFund}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">TDS</CInputGroupText>
                          <CFormInput
                            placeholder="Tax Deducted at Source"
                            autoComplete="TDS"
                            id="Tds"
                            name="Tds"
                            value={salaryform.Tds}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            Net salary&nbsp;&nbsp;&nbsp;
                          </CInputGroupText>
                          <CFormInput
                            placeholder="netSalary "
                            autoComplete="netSalary"
                            id="netSalary"
                            name="netSalary"
                            value={salaryform.netSalary}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">Gross Salary</CInputGroupText>
                          <CFormInput
                            placeholder="grossSalary"
                            autoComplete="grossSalary"
                            id="grossSalary"
                            name="grossSalary"
                            value={salaryform.grossSalary}
                            readOnly
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1">
                            {' '}
                            HRA&nbsp;&nbsp;&nbsp;{' '}
                          </CInputGroupText>
                          <CFormInput
                            placeholder="House Rent Allowance "
                            id="HRA"
                            name="HRA"
                            value={salaryform.HRA}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                      <CCol md={6}>
                        <CInputGroup className="mb-3">
                          <CInputGroupText id="basic-addon1"> Bank Account Id </CInputGroupText>
                          <CFormInput
                            placeholder="Bank Account Id"
                            id="bankAccountId"
                            name="bankAccountId"
                            value={salaryform.bankAccountId}
                            onChange={handleInputChange}
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>
                    <div className="d-grid">
                      <CButton type="submit" color="success">
                        Add employee Salary Structure
                      </CButton>
                    </div>
                  </CForm>
                )}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </div>
  )
}

export default Register
