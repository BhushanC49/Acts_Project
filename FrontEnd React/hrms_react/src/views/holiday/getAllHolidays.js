import React, { useState, useEffect } from 'react'
import HolidayApiService from '../../services/holiday.api'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../../scss/holidayList.css'

function GetHolidaysForm() {
  const [holidays, setHolidays] = useState([])
  const [error, setError] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
    async function fetchHolidays() {
      try {
        const holidayList = await HolidayApiService.getHolidayList()
        setHolidays(holidayList)
      } catch (error) {
        setError('Failed to fetch holidays. Please try again.')
      }
    }
    fetchHolidays()
  }, [])

  const handleDateClick = (date) => {
    setSelectedDate(date)
  }

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const holiday = holidays.find((holiday) => {
        const holidayFromDate = new Date(holiday.holidayFromDate)
        const holidayToDate = new Date(holiday.holidayToDate)
        return date >= holidayFromDate && date <= holidayToDate
      })
      if (holiday) {
        return (
          <div className="holiday-tile">
            <span className="holiday-name">{holiday.holidayName}</span>
          </div>
        )
      }
    }
  }

  return (
    <div className="holiday-container">
      <h2>Holidays</h2>
      {error && <div>{error}</div>}
      <div className="calendar-container">
        <Calendar
          onClickDay={handleDateClick}
          value={selectedDate}
          tileContent={tileContent}
          calendarClassName="custom-calendar"
        />
        {selectedDate && (
          <div className="selected-date">Selected Date: {selectedDate.toLocaleDateString()}</div>
        )}
      </div>
    </div>
  )
}

export default GetHolidaysForm
