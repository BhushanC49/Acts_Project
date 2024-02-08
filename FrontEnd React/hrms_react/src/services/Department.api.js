import axios from 'axios'
import { DepartmentUrl } from '../urls/Department.url'

class DepartmentApiService {
  async getDepartmentList() {
    //made async because http methods are asynchronous  in nature
    try {
      const url = DepartmentUrl.baseDepartmentUrl
      const response = await axios.get(url)
      return response.data // return the response data
    } catch (error) {
      throw new Error('department fetching failed. Please try again.')
    }
  }
}
export default new DepartmentApiService()
