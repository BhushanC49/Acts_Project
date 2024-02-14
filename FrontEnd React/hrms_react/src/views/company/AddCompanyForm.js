import React, { useState } from 'react';
import CompanyApiService from '../../services/company.api';
import '../../scss/addCompany.css'


const AddCompanyForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyContact, setCompanyContact] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const companyData = {
      companyName,
      companyEmail,
      companyContact
    };
    try {
      await CompanyApiService.addCompany(companyData);
      setCompanyName('');
      setCompanyEmail('');
      setCompanyContact('');
    } catch (error) {
      console.error('Failed to add company:', error);
    }
  };

  return (
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
    </form>
  );
};

export default AddCompanyForm;