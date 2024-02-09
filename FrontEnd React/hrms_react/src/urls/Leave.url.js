import { BaseUrl } from './base.url'
export class LeaveUrl extends BaseUrl {
  static baseLeaveUrl = `${BaseUrl.url}/leave`
  static getLeaveUrl = `${BaseUrl.url}/leave/`
}
