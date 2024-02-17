import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

import SalaryStructService from '../../services/SalaryStructure.api'

const ViewEmployee = () => {
  const [slipData, setSlipData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchPayslip() {
      try {
        const payslip = await SalaryStructService.fetchPayslip()
        setSlipData(payslip)
        console.log(payslip)
      } catch (error) {
        setError('Failed to fetch Payslip. Please try again.')
        console.error('Error fetching Payslip:', error)
      }
    }
    fetchPayslip()
  }, [])

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="8">
          <CCard>
            <CCardHeader>
              <h5>Employee Payslip</h5>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>
                  <strong>Salary ID:</strong> {slipData?.salId}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Employee:</strong> {slipData?.emp}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Bank Account ID:</strong> {slipData?.bankAccId}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Basic Salary:</strong> {slipData?.basicSalary}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Medical Allowance:</strong> {slipData?.medicalAllowance}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Conventional Allowance:</strong> {slipData?.conventionalAllowance}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>TDS:</strong> {slipData?.Tds}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Profession Tax:</strong> {slipData?.professionTax}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Gross Salary:</strong> {slipData?.grossSalary}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Net Salary:</strong> {slipData?.netSalary}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Provident Fund:</strong> {slipData?.providuntFund}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>Record Status:</strong> {slipData?.recordStatus ? 'Active' : 'Inactive'}
                </CListGroupItem>
                <CListGroupItem>
                  <strong>HRA:</strong> {slipData?.HRA}
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default ViewEmployee
