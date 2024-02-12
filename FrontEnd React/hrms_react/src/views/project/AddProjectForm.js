import React, { useState, useEffect } from 'react'
import { CompanyUrl } from '../../urls/company.url'
import { addProject } from '../../services/project.api'
import CompanyApiService from '../../services/company.api'
import '../../scss/project.css'

const ProjectForm = () => {
  const [companyName, setCompanyName] = useState('')
  const [projectName, setProjectName] = useState('')
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    // // Fetch companies from API
    // const fetchCompanies = async () => {
    //   try {
    //     // Fetch companies from API
    //     const response = await fetch(CompanyUrl.getAllCompanyUrl())
    //     if (response.ok) {
    //       const data = await response.json()
    //       // Update state with fetched companies
    //       setCompanies(data)
    //     } else {
    //       console.error('Failed to fetch companies')
    //     }
    //   } catch (error) {
    //     console.error('An error occurred while fetching companies:', error)
    //   }
    // }
    // fetchCompanies()
    CompanyApiService.getCompaniesList()
      .then((data) => {
        console.log(data)
        setCompanies([...data])
      })
      .catch((error) => {
        console.error('Error fetching companies:', error)
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const projectData = { companyName, projectName }
    try {
      await addProject(projectData)
      console.log('Project added successfully')
      // Optionally, you can redirect or perform any other action upon successful creation
    } catch (error) {
      console.error('Failed to add project:', error)
    }
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      <div className="form-group">
        <label htmlFor="companyName">Company Name:</label>
        <select
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        >
          <option value="">Select Company</option>
          {companies.map((company) => (
            <option key={company.companyId} value={company.companyName}>
              {company.companyName}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Project</button>
    </form>
  )
}

export default ProjectForm
