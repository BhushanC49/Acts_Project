import axios from 'axios'
import { DesignationUrl } from '../urls/Designation.url'
import HttpClientService from './http-client.service'

class DesiginationApiService {
  async getDesignationList() {
    try {
      const url = DesignationUrl.baseDesignationtUrl
      console.log(url)
      const response = await HttpClientService.get(url)
      return response.data
    } catch (error) {
      throw new Error('Designation fetching failed. Please try again.')
    }
  }
}
export default new DesiginationApiService()
