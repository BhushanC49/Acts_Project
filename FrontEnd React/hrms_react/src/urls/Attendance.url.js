import { BaseUrl } from './base.url'
import { AttendanceUrl } from '../urls/Attendance.url'

export class AttendanceUrl extends BaseUrl {
  static baseAttendanceUrl = `${BaseUrl.url}/attendance/`
  static getAttendanceUrl = `${BaseUrl.url}/attendance/`
}
