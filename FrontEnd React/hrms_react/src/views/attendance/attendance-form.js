import React, { useState } from 'react'

const handleSubmit = (e) => {
  e.preventDefault()
  // Perform form submission logic (e.g., send data to backend)

  console.log('Form submitted:')
}

export default function attendanceform() {
  return (
    <div>
      <h1>Mark Attendance</h1>
      <form onSubmit={handleSubmit}>
        <label for="mark">Mark Attendance </label>
        <CButton component="input" type="submit" color="primary" value="Submit" />
      </form>
    </div>
  )
}
