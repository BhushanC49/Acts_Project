// Employee.url.js
import { BaseUrl } from './base.url'

export class EmployeeUrl extends BaseUrl {
  static baseEmployeeUrl = `${BaseUrl.url}/employee` // Use 'BaseUrl.url' instead of 'this.url'
  static getEmployeeUrl = `${BaseUrl.url}/employee/` // Use 'BaseUrl.url' instead of 'this.url'
}
// Add a newline at the end of the file
