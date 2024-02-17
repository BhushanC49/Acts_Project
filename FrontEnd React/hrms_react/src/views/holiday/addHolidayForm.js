import React, { useRef, useEffect, useState } from 'react'
import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CRow } from '@coreui/react'
import HolidayService from '../../services/holiday.api'
import { CToast, CToastBody, CToastHeader, CToaster } from '@coreui/react'
import '../../scss/holiday.css' // Import the CSS file

function HolidayForm() {
  const [errorMessage, setErrorMessage] = useState('')
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const [HolidayData, setHolidayData] = useState({
    holidayName: '',
    holidayFromDate: '',
    holidayToDate: '',
  })

  const handleInputChange = (e) => {
    setHolidayData({
      ...HolidayData,
      [e.target.name]: e.target.value,
    })
  }
  const successToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-success fs-4">Success !</div>
      </CToastHeader>
      <CToastBody>Holiday is added successfully.</CToastBody>
    </CToast>
  )
  const invalidToast = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody>Error in adding holiday!</CToastBody>
    </CToast>
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(HolidayData)
    // Reset form fields and error message after submission
    HolidayService.addHoliday(HolidayData)
      .then((res) => {
        addToast(successToast)
      })
      .catch((err) => {
        addToast(invalidToast)
        alert(`An Error Occured While Submitting your Request :  ${err}`)
      })
    setErrorMessage('')
  }

  return (
    <>
      <div className="form-container">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={12}>
              <CCard className="mx-4" style={{ width: '100%' }}>
                <CCardBody className="p-4">
                  <>
                    <CForm onSubmit={handleSubmit}>
                      <h1>Add Holiday</h1>
                      <p className="text-medium-emphasis">Add Your Holiday</p>
                      <CRow className="mb-3">
                        <div>
                          <label htmlFor="holidayName">Holiday Name:</label>
                          <input
                            type="text"
                            id="holidayName"
                            name="holidayName"
                            value={HolidayData.holidayName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </CRow>
                      <CRow className="mb-3">
                        <div>
                          <label htmlFor="holidayFromDate">From Date:</label>
                          <input
                            type="date"
                            id="holidayFromDate"
                            name="holidayFromDate"
                            value={HolidayData.holidayFromDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </CRow>
                      <CRow className="mb-3">
                        <div>
                          <label htmlFor="holidayToDate">To Date:</label>
                          <input
                            type="date"
                            id="holidayToDate"
                            name="holidayToDate"
                            value={HolidayData.holidayToDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </CRow>
                      <div className="d-grid">
                        <CButton type="submit" color="success">
                          ADD
                        </CButton>
                      </div>
                      {errorMessage && <div className="error-message">{errorMessage}</div>}
                    </CForm>
                  </>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default HolidayForm
