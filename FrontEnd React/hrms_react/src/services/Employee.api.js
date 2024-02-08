import axios from 'axios'
import { EmployeeUrl } from '../urls/Employee.url'

class EmployeeApiService {
  async addEmployee(employee) {
    try {
      const url = EmployeeUrl.baseEmployeeUrl
      const response = await axios.post(url, employee)
      return response.data // return the response data
    } catch (error) {
      throw new Error('Employee registration failed. Please try again.')
    }
  }

  async fetchEmployees() {
    try {
      const url = EmployeeUrl
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      console.error('Error fetching employees', error)
      throw error
    }
  }
}

export default new EmployeeApiService()
