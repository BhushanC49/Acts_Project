import HttpClientService from './http-client.service'
import { OnDutyUrl } from 'src/urls/OnDuty.url'

class OnDutyApiService {
  static async insertOnDuty(onDuty) {
    const url = OnDutyUrl.onDutyUrl

    try {
      const response = await HttpClientService.post(url, onDuty)
      return response.data // return the response data
    } catch (error) {
      throw new Error(error)
    }
  }

  static async markOnDuty(onDutyId) {
    const url = `${OnDutyUrl.onDutyListUrl}/${onDutyId}`
    try {
      const response = await HttpClientService.put(url, onDutyId)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }

  static async fetchOnDutyListByManger() {
    const url = OnDutyUrl.onDutyListUrl

    try {
      const response = await HttpClientService.get(url)
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default OnDutyApiService
