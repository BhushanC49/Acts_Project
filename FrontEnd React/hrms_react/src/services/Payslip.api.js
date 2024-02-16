import HttpClientService from './http-client.service'
import { PayslipUrl } from 'src/urls/PayslipUrl'

const payslipUrl = PayslipUrl.basePayslipUrl

const SalaryStructService = {
  fetchPayslip: async () => {
    try {
      const response = await HttpClientService.get(payslipUrl)
      return response.data
    } catch (error) {
      console.error('Error fetching Sal Struct: ', error)
      throw error
    }
  },
}

export default SalaryStructService
