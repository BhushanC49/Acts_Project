import { BaseUrl } from './base.url'
export class LeaveUrl extends BaseUrl {
  static baseLeaveUrl = `${this.baseUrl}/leave`
  static getLeaveUrl = `${this.baseLeaveUrl}/`
}
