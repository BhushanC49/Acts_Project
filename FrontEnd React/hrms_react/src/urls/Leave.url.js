import { BaseUrl } from './base.url'
export class LeaveUrl extends BaseUrl {
  static baseLeaveUrl = `${BaseUrl.url}/Leave`
  static getLeaveUrl = `${BaseUrl.url}/Leave/`
}
