import axios from 'axios'
import { EmployeeUrl } from '../urls/Employee.url'

export class EmployeeApiService {


    async addEmployee(employee) {
        //made async because http methods are asynchronous  in nature
        try {
            const url = EmployeeUrl.baseEmployeeUrl
            const response = await axios.post(url, employee)

            return response.data // return the response data
        } catch (error) {
            throw new Error('Employee regestraton failed. Please try again.')
        }
    }
}

export default new EmployeeApiService();
