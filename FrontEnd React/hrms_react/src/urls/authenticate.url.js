import { BaseUrl } from './base.url'

export class AuthenticateUrl extends BaseUrl {
  // constructor(){
  //   console.log(this.url);
  // }
  static loginUrl = `${BaseUrl.url}/login`
  static registerUrl = `${BaseUrl.baseUrl}/register`
}
