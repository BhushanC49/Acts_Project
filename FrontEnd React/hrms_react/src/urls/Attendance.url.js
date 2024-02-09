import { BaseUrl } from './base.url'
import { AttendanceUrl } from '../urls/Attendance.url'

export class AttendanceUrl extends BaseUrl {
  static baseAttendanceUrl = `${this.baseUrl}/attendance`
  static getAttendanceUrl = `${this.baseUrl}/attendance/`
}
