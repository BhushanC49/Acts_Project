// Employee.url.js
import { BaseUrl } from './base.url'

export class EmployeeUrl extends BaseUrl {
  static baseEmployeeUrl = `${BaseUrl.url}/employee`
  static getAllMangersUrl = `${BaseUrl.url}/employee/manager`
}
