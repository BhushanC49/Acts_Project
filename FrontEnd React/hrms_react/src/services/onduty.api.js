import HttpClientService from './http-client.service'
import { OnDutyUrl } from 'src/urls/OnDuty.url'

class OnDutyApiService {
  static async markOnDuty(onDuty) {
    const url = OnDutyUrl.onDutyUrl

    try {
      const response = await HttpClientService.post(url, onDuty)
      return response.data // return the response data
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default OnDutyApiService
