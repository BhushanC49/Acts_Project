import HttpClientService from './http-client.service'
import { ProjectUrl } from '../urls/project.url'

export const addProject = async (projectData) => {
  try {
    const response = await HttpClientService.post(ProjectUrl.createProjectUrl(), projectData)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const getAllProjects = async () => {
  try {
    const response = await HttpClientService.get(ProjectUrl.getAllProjectsUrl())
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const searchProjectByName = async (projectName) => {
  try {
    const response = await HttpClientService.get(ProjectUrl.searchProjectByNameUrl(projectName))
    return response.data
  } catch (error) {
    throw error.response.data
  }
}
