import { AuthenticateUrl } from '../urls/authenticate.url'
import HttpClientService from './http-client.service'
export class AuthenticateApiService {
  static async login(username, password) {
    //made async because http methods are asynchronous  in nature
    const url = AuthenticateUrl.loginUrl
    try {
      const response = await HttpClientService.post(
        url,
        {},
        {
          auth: { username: username, password: password },
        },
      )
      return response.data // return the response data
    } catch (error) {
      throw new Error(error)
    }
  }
}
