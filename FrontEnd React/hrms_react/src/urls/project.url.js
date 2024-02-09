import { BaseUrl } from '../urls/base.url'
export class ProjectUrl extends BaseUrl {
  static baseProjectUrl = `${BaseUrl.url}/api/projects`

  static createProjectUrl() {
    return `${ProjectUrl.baseProjectUrl}/create`
  }

  static getAllProjectsUrl() {
    return `${ProjectUrl.baseProjectUrl}/all`
  }

  static searchProjectByNameUrl(projectName) {
    return `${ProjectUrl.baseProjectUrl}/search?name=${projectName}`
  }
}
