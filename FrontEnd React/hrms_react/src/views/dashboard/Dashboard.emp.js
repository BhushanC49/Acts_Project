import React from 'react'
import GetHolidaysForm from '../holiday/getAllHolidays'
import ViewEmployee from '../employee/viewEmployee'

export default function EmployeeDashboard() {
  return (
    <div>
      <ViewEmployee></ViewEmployee>
      <GetHolidaysForm></GetHolidaysForm>
    </div>
  )
}
