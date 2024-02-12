import { EmployeeUrl } from '../urls/Employee.url'
import HttpClientService from './http-client.service'

class EmployeeApiService {
  async addEmployee(employee) {
    try {
      const url = EmployeeUrl.baseEmployeeUrl
      console.log(url)
      const response = await HttpClientService.post(url, employee)
      return response.data // return the response data
    } catch (error) {
      throw new Error('Employee registration failed. Please try again.')
    }
  }

  async fetchEmployees() {
    try {
      const url = EmployeeUrl.baseEmployeeUrl
      let pageNumber = 1
      let pageSize = 20
      const response = await HttpClientService.get(url, pageNumber, pageSize)
      return response.data
    } catch (error) {
      console.error('Error fetching employees', error)
      throw error
    }
  }

  async fetchManagers() {
    try {
      const url = EmployeeUrl.getAllMangersUrl
      const response = await HttpClientService.get(url)
      console.log(response)
      return response.data
    } catch (error) {
      console.error('Error fetching managers', error)
      throw error
    }
  }
}

export default new EmployeeApiService()
