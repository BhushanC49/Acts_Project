import React, { useState, useEffect } from 'react'
import HolidayApiService from '../../services/holiday.api'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react' // Assuming you have imported these components
import '../../scss/holidayList.css'

function GetHolidaysForm() {
  const [holidays, setHolidays] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchHolidays() {
      try {
        const holidayList = await HolidayApiService.getHolidayList()
        setHolidays(holidayList)
        console.log(holidayList)
      } catch (error) {
        setError('Failed to fetch holidays. Please try again.')
      }
    }
    fetchHolidays()
  }, [])

  return (
    <div className="holiday-container">
      <h2>Holidays</h2>
      {error && <div>{error}</div>}
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Holiday Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">From</CTableHeaderCell>
            <CTableHeaderCell scope="col">To</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {holidays.map((holiday, index) => (
            <CTableRow key={holiday.id}>
              <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
              <CTableDataCell>{holiday.holidayName}</CTableDataCell>
              <CTableDataCell>{holiday.holidayFromDate}</CTableDataCell>
              <CTableDataCell>{holiday.holidayToDate}</CTableDataCell>
              <CTableDataCell className={holiday.recordStatus ? 'text-success' : 'text-danger'}>
                {holiday.recordStatus ? 'Active' : 'Inactive'}
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default GetHolidaysForm
