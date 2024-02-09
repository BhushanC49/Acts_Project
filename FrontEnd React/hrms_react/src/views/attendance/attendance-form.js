import React, { useState } from 'react'

export default function attendanceform() {
  const [currentDate, setCurrentDate] = useState('') // State for current date

  const handleSubmit = (e) => {
    e.preventDefault()
    // send data to backend
    LeaveService.insertLeave(formData)
      .then((res) => {
        alert(`Your leave-form has been submitted!`)
      })
      .catch((err) => {
        alert(`An error occurred while submitting your request: ${err}`)
      })
    console.log('Form submitted:', formData)
  }
  // Function to get current date in 'YYYY-MM-DD' format
  const getCurrentDate = () => {
    const date = new Date()
    const formattedDate = date.toISOString().split('T')[0]
    setCurrentDate(formattedDate)
  }

  // Fetch current date when component mounts
  useEffect(() => {
    getCurrentDate()
  }, [])

  return (
    <div>
      <h1 value={currDate}>{date}</h1>
      <h1>Mark Attendance</h1>
      <form onSubmit={handleSubmit}>
        <label for="mark">Mark Attendance </label>
        <CButton component="input" type="submit" color="primary" value="Submit" />
      </form>
    </div>
  )
}
