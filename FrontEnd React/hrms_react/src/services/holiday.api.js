import { HolidayUrl } from '../urls/holiday.url'
import HttpClientService from './http-client.service'

class HolidayApiService {
  async getHolidayList() {
    try {
      const url = HolidayUrl.getHolidayUrl
      const response = await HttpClientService.get(url)
      return response.data
    } catch (error) {
      throw new Error('Holiday fetching failed. Please try again.')
    }
  }

  async addHoliday(holiday) {
    try {
      const url = HolidayUrl.addHolidayUrl
      const response = await HttpClientService.post(url, holiday)
      return response.data
    } catch (error) {
      throw new Error('Holiday creation failed. Please try again.')
    }
  }
}

export default new HolidayApiService()
