import React, { useState, useEffect, useRef } from 'react'
import { CompanyUrl } from '../../urls/company.url'
import { addProject } from '../../services/project.api'
import CompanyApiService from '../../services/company.api'
import '../../scss/project.css'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'

const ProjectForm = () => {
  const [companyName, setCompanyName] = useState('')
  const [projectName, setProjectName] = useState('')
  const [companies, setCompanies] = useState([])
  const [toast, addToast] = useState(0)
  const toaster = useRef()

  const invalidToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody>
        Couldn&rsquo;t submit Form ! Please Check Details Before Submitting .{' '}
      </CToastBody>
    </CToast>
  )
  const successToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Success !</div>
      </CToastHeader>
      <CToastBody>Your form has been submitted successfully.</CToastBody>
    </CToast>
  )
  useEffect(() => {
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
      addToast(successToast)
      // Optionally, you can redirect or perform any other action upon successful creation
    } catch (error) {
      console.error('Failed to add project:', error)
      addToast(invalidToast)
    }
  }

  return (
    <div>
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
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </div>
  )
}

export default ProjectForm
