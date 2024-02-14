import HttpClientService from './http-client.service'
import { AttendanceUrl } from 'src/urls/Attendance.url'

const AttendanceService = {
  markAttendance: async (currentDate) => {
    try {
      const url = AttendanceUrl.baseAttendanceUrl
      const response = await HttpClientService.post(url, currentDate)
      return response.data
    } catch (error) {
      console.error('Error marking attendance !', error)
      throw error
    }
  },
}
export default AttendanceService
