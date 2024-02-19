import React, { useRef, useState } from 'react'
import CompanyApiService from '../../services/company.api'
import '../../scss/addCompany.css'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'

const AddCompanyForm = () => {
  const [companyName, setCompanyName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [companyContact, setCompanyContact] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const companyData = {
      companyName,
      companyEmail,
      companyContact,
    }

    try {
      // Assuming you have a method to fetch all companies
      const companies = await CompanyApiService.getCompaniesList()
      // Check if the company name already exists
      const existingCompany = companies.find((company) => company.companyName === companyName)
      if (existingCompany) {
        addToast(invalidToast)
        setErrorMessage('Company name already exists. Please choose a different name.')
        return
      }

      // If the company name is unique, proceed to add the company
      await CompanyApiService.addCompany(companyData)
      addToast(successToast)
      setCompanyName('')
      setCompanyEmail('')
      setCompanyContact('')
      setErrorMessage('')
    } catch (error) {
      addToast(invalidToast)
      console.error('Failed to add company:', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-company-form">
        <h3>Add Company</h3>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Company Email"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company Contact"
          value={companyContact}
          onChange={(e) => setCompanyContact(e.target.value)}
          required
        />
        <button type="submit">Add Company</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </div>
  )
}

export default AddCompanyForm
