import { BaseUrl } from "./base.url";

export class AuthenticateUrl extends BaseUrl {
    static loginUrl = `${this.baseUrl}/login`;
    static registerUrl = `${this.baseUrl}/register`;

}