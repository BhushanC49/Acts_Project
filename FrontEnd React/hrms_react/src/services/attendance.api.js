import axios from 'axios'
import { AttendanceUrl } from 'src/urls/Attendance.url'

const AttendanceService = {
  markAttendance: async (employeeId, currentDate) => {
    try {
      const url = AttendanceUrl.baseAttendanceUrl
      const response = await axios.post(url + employeeId, currentDate)
      return response.data
    } catch (error) {
      console.error('Error marking attendance !', error)
      throw error
    }
  },
}
export default AttendanceService
