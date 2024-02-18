import React, { useState, useEffect } from 'react'
import CompanyApiService from '../../services/company.api'
import '../../scss/companyList.css'

const CompanyList = () => {
  const [companies, setCompanies] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(null)

  useEffect(() => {
    fetchCompanies()
  }, [])

  const fetchCompanies = async () => {
    try {
      const data = await CompanyApiService.getCompaniesList()
      setCompanies(data)
    } catch (error) {
      console.error('Failed to fetch companies:', error)
    }
  }

  const handleDelete = async (companyId) => {
    try {
      await CompanyApiService.removeCompany(companyId)
      const updatedCompanies = companies.filter((company) => company.id !== companyId)
      setCompanies(updatedCompanies)
      fetchCompanies()
    } catch (error) {
      console.error('Failed to delete company:', error)
    }
  }

  const handleUpdate = async () => {
    try {
      await CompanyApiService.updateCompany(selectedCompany.comapanyId, selectedCompany)
      await fetchCompanies() // Wait for fetchCompanies to complete
      setSelectedCompany(null) // Set selectedCompany to null after updating the list
    } catch (error) {
      console.error('Failed to update company:', error)
    }
  }

  const handleSelectCompany = (company) => {
    setSelectedCompany(company)
  }

  return (
    <div className="company-list">
      <h2>Company List</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Company Name</th>
            <th>Company Email</th>
            <th>Company Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={company.companyId}>
              <td>{index + 1}</td>
              <td>{company.companyName}</td>
              <td>{company.companyEmail}</td>
              <td>{company.companyContact}</td>
              <td>
                <button onClick={() => handleDelete(company.companyId)} className="delete-button">
                  Delete
                </button>
                <button onClick={() => handleSelectCompany(company)} className="update-button">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCompany && (
        <div>
          <h2>Update Company</h2>
          <form onSubmit={handleUpdate} className="company-form">
            <label>Company Name</label>
            <input
              type="text"
              value={selectedCompany.companyName}
              onChange={(e) =>
                setSelectedCompany((prevState) => ({ ...prevState, companyName: e.target.value }))
              }
            />
            <label>Company Email</label>
            <input
              type="email"
              value={selectedCompany.companyEmail}
              onChange={(e) =>
                setSelectedCompany((prevState) => ({ ...prevState, companyEmail: e.target.value }))
              }
            />
            <label>Company Contact</label>
            <input
              type="text"
              value={selectedCompany.companyContact}
              onChange={(e) =>
                setSelectedCompany((prevState) => ({
                  ...prevState,
                  companyContact: e.target.value,
                }))
              }
            />
            <button type="submit" className="update-button2">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default CompanyList
