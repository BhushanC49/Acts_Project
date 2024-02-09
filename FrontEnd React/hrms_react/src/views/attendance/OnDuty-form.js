// OnDutyForm.js

import React, { useState } from 'react';
import '../../scss/onDuty.css'; // Import the CSS file

const OnDutyForm = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [dutyType, setDutyType] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate From Date
    const today = new Date();
    const selectedFromDate = new Date(fromDate);
    if (selectedFromDate > today) {
      setError('From Date cannot be after today.');
      return;
    }

    // Validate To Date
    const selectedToDate = new Date(toDate);
    if (selectedToDate < selectedFromDate) {
      setError('To Date cannot be before From Date.');
      return;
    }
    // Validate other required fields
    if (!fromDate || !toDate || !dutyType) {
      setError('All fields are required.');
      return;
    }

    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', {
      fromDate,
      toDate,
      dutyType,
      comment,
    });
  };

  return (
    <div className="form-box">
      <h1>Apply for On Duty</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fromDate">From Date:</label>
        <br />
        <input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <br />

        <label htmlFor="toDate">To Date:</label>
        <br />
        <input
          type="date"
          id="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
        <br />

        <label htmlFor="dutyType">On Duty Type:</label>
        <br />
        <select
          id="dutyType"
          value={dutyType}
          onChange={(e) => setDutyType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Access Card Issue">Access Card Issue</option>
          <option value="Overseas Travel">Overseas Travel</option>
          <option value="Permission">Permission</option>
        </select>
        <br />

        <label htmlFor="comment">Comment:</label>
        <br />
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default OnDutyForm;

