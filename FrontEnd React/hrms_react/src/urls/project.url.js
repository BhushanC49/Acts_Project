export class ProjectUrl {
  static baseProjectUrl = `api/projects`

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
