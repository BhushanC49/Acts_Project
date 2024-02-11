import axios from 'axios'
import { DesignationUrl } from '../urls/Designation.url'

class DesiginationApiService {
  async getDesignationList() {
    try {
      const url = DesignationUrl.baseDesignationtUrl
      console.log(url)
      const response = await axios.get(url)
      return response.data  
    } catch (error) {
      throw new Error('Designation fetching failed. Please try again.')
    }
  }
  
}
export default new DesiginationApiService()
