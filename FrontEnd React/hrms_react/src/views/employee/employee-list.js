import React, { useState, useEffect } from 'react'
import EmployeeApiService from '../../services/Employee.api'
import '../../scss/employeelist.css'
function EmployeeList() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    //Fetch data from the server when the component mounts
    EmployeeApiService.fetchEmployees()
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error setting employees:', error))
  }, [])

  return (
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
  )
}

export default EmployeeList
