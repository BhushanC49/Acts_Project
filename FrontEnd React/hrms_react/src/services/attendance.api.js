import axios from 'axios'
import { AttendanceUrl } from 'src/urls/Attendance.url'

const AttendanceService = {
  markAttendance: async (attendance, empId) => {
    try {
      const url = AttendanceUrl.baseAttendanceUrl
      const response = await axios.post(url + empId, attendance) // pending to give empId as path variable
      return response.data
    } catch (error) {
      console.error('Error marking attendance !', error)
      throw error
    }
  },
}
export default AttendanceService
