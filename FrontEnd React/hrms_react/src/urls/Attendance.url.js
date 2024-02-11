import { BaseUrl } from './base.url'
export class AttendanceUrl extends BaseUrl {
  static baseAttendanceUrl = `${this.baseUrl}/attendance/`
  static getAttendanceUrl = `${this.baseUrl}/attendance/`
}
