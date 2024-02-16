import React, { useState, useEffect, useRef } from 'react'
import EmployeeApiService from '../../services/Employee.api'
import '../../scss/employeelist.css'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'
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
      <div>
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
      </div>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default EmployeeList
