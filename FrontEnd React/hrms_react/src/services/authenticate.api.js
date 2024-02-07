import axios from 'axios'
import { AuthenticateUrl } from '../urls/authenticate.url'

export class AuthenticateApiService {
  async login(username, password) {
    //made async because http methods are asynchronous  in nature
    try {
      const url = AuthenticateUrl.loginUrl
      const response = await axios.post(url, {
        username: username,
        password: password,
      })

      return response.data // return the response data
    } catch (error) {
      throw new Error('Login failed. Please try again.')
    }
  }
}
