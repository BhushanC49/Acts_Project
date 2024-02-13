/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import DepartmentApiService from '../../services/Department.api'
function DepartmentList() {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    // Fetch data from the server when the component mounts
    // EmployeeApiService.fetchEmployees()
    //   .then((data) => setEmployees(data))
    //   .catch((error) => console.error('Error setting employees:', error))
  }, [])

  return (
    <div>
      <h2>Department List</h2>
      <table className="department-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Company</th>
            <th>Record Status</th>
            <th>Active Status</th>
            <th>Created On</th>
            <th>Updated On</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((departments) => (
            <tr key={departments.id}>
              <td>{departments.id}</td>
              <td>{departments.deptname}</td>
              <td>{departments.company.companyName}</td>
              <td>{departments.recordStatus}</td>
              <td>{departments.isActive}</td>
              <td>{departments.createdOn}</td>
              <td>{departments.updatedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DepartmentList
