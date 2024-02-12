import { DepartmentUrl } from '../urls/Department.url'
import HttpClientService from './http-client.service'

class DepartmentApiService {
  async getDepartmentList() {
    //made async because http methods are asynchronous  in nature
    try {
      const url = DepartmentUrl.baseDepartmentUrl
      console.log(url)
      const response = await HttpClientService.get(url)
      return response.data // return the response data
    } catch (error) {
      throw new Error('department fetching failed. Please try again.')
    }
  }

  async addDepartment(department) {
    //made async because http methods are asynchronous  in nature
    try {
      const url = DepartmentUrl.baseDepartmentUrl
      console.log(url)
      const response = await HttpClientService.post(url, department)
      return response.data // return the response data
    } catch (error) {
      throw new Error('department fetching failed. Please try again.')
    }
  }
}
export default new DepartmentApiService()
