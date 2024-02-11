import axios from 'axios'
import { CompanyUrl } from '../urls/company.url'

class CompanyApiService {
  async getCompaniesList() {
    // Made async because HTTP methods are asynchronous in nature
    try {
      const url = CompanyUrl.baseCompanyUrl
      console.log(url)
      const response = await axios.get(url)
      return response.data // Return the response data
    } catch (error) {
      throw new Error('Companies fetching failed. Please try again.')
    }
  }
}

export default new CompanyApiService()
