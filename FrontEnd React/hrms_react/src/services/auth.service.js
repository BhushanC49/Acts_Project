import { jwtDecode } from 'jwt-decode'
import { StorageService } from './storage.service'

export class AuthService {
  static getUsername() {
    const token = StorageService.get('token')
    if (!token) {
      return null
    }
    const payload = jwtDecode(token)
    return payload?.sub ?? null
  }

  static getRole() {
    const token = StorageService.get('token')
    if (!token) {
      return null
    }
    const payload = jwtDecode(token)
    return payload?.scope ?? null
  }

  static isLoggedIn() {
    return !!StorageService.get('token')
  }
}
