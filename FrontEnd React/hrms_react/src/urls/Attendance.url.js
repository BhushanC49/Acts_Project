import { BaseUrl } from './base.url'
export class AttendanceUrl extends BaseUrl {
  static baseAttendanceUrl = `${BaseUrl.url}/attendance/`
  static getAttendanceUrl = `${BaseUrl.url}/attendance/`
}
