export class StorageService {
  static get(key) {
    const value = sessionStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return null
  }
  static set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
}
