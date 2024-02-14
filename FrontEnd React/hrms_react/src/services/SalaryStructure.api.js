import { SalaryStructureUrl } from '../urls/SalaryStructure.url'
import HttpClientService from './http-client.service'

class SalaryStructureApiService {
  async addSalaryStru(salaryStru) {
    try {
      const url = SalaryStructureUrl.salaryUrl
      console.log(url + ' ' + salaryStru.empId)
      const response = await HttpClientService.post(url, salaryStru)
      return response.data
    } catch (error) {
      throw new Error('error while adding salarystructure. Please try again.')
    }
  }
}
export default new SalaryStructureApiService()
