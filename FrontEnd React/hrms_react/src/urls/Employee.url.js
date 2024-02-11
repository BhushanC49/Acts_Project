// Employee.url.js
import { BaseUrl } from './base.url'

export class EmployeeUrl extends BaseUrl {
  static baseEmployeeUrl = `${this.baseUrl}/employee`
  static getAllMangersUrl = `${this.baseEmployeeUrl}/manager`
}
