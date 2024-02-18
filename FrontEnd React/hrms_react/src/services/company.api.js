import HttpClientService from './http-client.service'
import { CompanyUrl } from '../urls/company.url'

class CompanyApiService {
  async getCompaniesList() {
    // Made async because HTTP methods are asynchronous in nature
    try {
      const url = CompanyUrl.baseCompanyUrl
      console.log(url)
      const response = await HttpClientService.get(url)
      return response.data // Return the response data
    } catch (error) {
      throw new Error('Companies fetching failed. Please try again.')
    }
  }
  async addCompany(companyData) {
    try {
      const response = await HttpClientService.post(CompanyUrl.addCompanyUrl, companyData)
      return response.data // Return the response data
    } catch (error) {
      throw new Error('Failed to add company. Please try again.')
    }
  }

  async removeCompany(companyId) {
    try {
      const url = `${CompanyUrl.baseCompanyUrl}/${companyId}`
      const response = await HttpClientService.delete(url)
      return response.data // Return the response data
    } catch (error) {
      throw new Error('Failed to delete the company. Please try again.')
    }
  }
  async updateCompany(companyId, updatedCompanyData) {
    try {
      const url = `${CompanyUrl.baseCompanyUrl}/${companyId}`
      const response = await HttpClientService.put(url, updatedCompanyData)
      return response.data
    } catch (error) {
      throw new Error('Failed to update company. Please try again.')
    }
  }
}

export default new CompanyApiService()
