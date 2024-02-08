import React, { useState, useEffect } from 'react'
import { fetchEmployees } from './employeeService' // Import the service function

function EmployeeList() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchEmployees()
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error setting employees:', error))
  }, [])

  return (
    <div>
      <h2>Employee List</h2>
      <table>
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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.dept.name}</td>
              <td>{employee.leaveBalance}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList
