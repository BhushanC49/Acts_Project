import axios from 'axios'
import { ProjectUrl } from '../urls/project.url'

export const addProject = async (projectData) => {
  try {
    const response = await axios.post(ProjectUrl.createProjectUrl(), projectData)
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const getAllProjects = async () => {
  try {
    const response = await axios.get(ProjectUrl.getAllProjectsUrl())
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const searchProjectByName = async (projectName) => {
  try {
    const response = await axios.get(ProjectUrl.searchProjectByNameUrl(projectName))
    return response.data
  } catch (error) {
    throw error.response.data
  }
}
