import React, { useState, useEffect } from 'react';
import HolidayApiService from '../../services/holiday.api'; // Assuming you have a service for handling holiday API requests
import '../../scss/holidayList.css'; // Import the CSS file
function GetHolidaysForm() {
  const [holidays, setHolidays] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHolidays() {
      try {
        const holidayList = await HolidayApiService.getHolidayList();
        setHolidays(holidayList);
      } catch (error) {
        setError('Failed to fetch holidays. Please try again.');
      }
    }
    fetchHolidays();
  }, []);

  return (
    <div>
      <h2>Holidays</h2>
      {error && <div>{error}</div>}
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.id}>
            <strong>{holiday.holidayName}</strong> - {holiday.holidayFromDate} to {holiday.holidayToDate}
            {holiday.status && <span> - Status: {holiday.status}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetHolidaysForm;
