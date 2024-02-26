import HttpClientService from './http-client.service'
import { AttendanceUrl } from 'src/urls/Attendance.url'

const AttendanceService = {
  markAttendance: async (currentDate) => {
    try {
      const url = AttendanceUrl.baseAttendanceUrl + 'mark-attendance'
      const response = await HttpClientService.post(url, currentDate)
      return response.data
    } catch (error) {
      console.error('Error marking attendance !', error)
      throw error
    }
  },

  fetchAttendance: async () => {
    try {
      const url = AttendanceUrl.baseAttendanceUrl + 'get-attendance'
      const response = await HttpClientService.get(url)
      return response.data
    } catch (error) {
      console.error('error fetching attendance dates', error)
      throw error
    }
  },
}
export default AttendanceService
