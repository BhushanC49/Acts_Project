import HttpClientService from './http-client.service'
import { LeaveUrl } from 'src/urls/Leave.url'

const leaveUrl = LeaveUrl.baseLeaveUrl
const getUrl = LeaveUrl.getLeaveTypeUrl

const LeaveService = {
  fetchLeaveTypes: async () => {
    try {
      const response = await HttpClientService.get(getUrl)
      return response.data
    } catch (error) {
      console.error('Error fetching leave types:', error)
      throw error
    }
  },

  insertLeave: async (leaveId, leave) => {
    try {
      console.log('in service add')
      const response = await HttpClientService.post(`${leaveUrl}/${leaveId}`, leave)
      return response.data
    } catch (error) {
      console.error('Error inserting leave:', error)
      throw error
    }
  },
}

export default LeaveService
