import axios from 'axios'
import { LeaveUrl } from 'src/urls/Leave.url'

const leaveUrl = LeaveUrl.baseLeaveUrl
const getUrl = LeaveUrl.getLeaveUrl

const LeaveService = {
  fetchLeaveTypes: async () => {
    try {
      const response = await axios.get(getUrl)
      return response.data
    } catch (error) {
      console.error('Error fetching leave types:', error)
      throw error
    }
  },

  insertLeave: async (leaveId, date) => {
    try {
      console.log('in service add')
      const response = await axios.post(`${leaveUrl}/${leaveId}`, date)
      return response.data
    } catch (error) {
      console.error('Error inserting leave:', error)
      throw error
    }
  },
}

export default LeaveService
