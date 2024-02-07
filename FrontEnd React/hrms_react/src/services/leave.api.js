import axios from 'axios'
import { AuthenticateUrl } from '../urls/authenticate.url'

const url = AuthenticateUrl.loginUrl

const LeaveService = {
  fetchLeaveTypes: async () => {
    try {
      const response = await axios.get(`${url}/leave-types`)
      return response.data
    } catch (error) {
      console.error('Error fetching leave types:', error)
      throw error
    }
  },

  insertLeave: async (leave) => {
    try {
      console.log('in service add')
      const response = await axios.post(`${url}/leave/${leave.pid}`, leave)
      return response.data
    } catch (error) {
      console.error('Error inserting leave:', error)
      throw error
    }
  },
}

export default LeaveService
