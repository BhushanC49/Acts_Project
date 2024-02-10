import { BaseUrl } from './base.url'
export class CompanyUrl extends BaseUrl {
  static baseCompanyUrl = `${BaseUrl.url}/api/companies`
  static getAllCompanyUrl() {
    return `${CompanyUrl.baseCompanyUrl}/all`
  }
}
