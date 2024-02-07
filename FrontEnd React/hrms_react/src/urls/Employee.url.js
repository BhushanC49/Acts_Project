import { BaseUrl } from './base.url'

export class EmployeeUrl extends BaseUrl {
    static baseEmployeeUrl = `${this.baseUrl}/employee`
    static getEmployeeUrl = `${this.baseUrl}/employee/`
}
