import { useLocation, useNavigate } from 'react-router-dom'
import React, { useState, useRef } from 'react'
import { AuthenticateApiService } from 'src/services/authenticate.api'
import {
  CCard,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
  CTooltip,
  CCardGroup,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { StorageService } from 'src/services'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const navigate = useNavigate()

  const navigateToDashboard = () => {
    navigate('/dashboard')
  }

  const invalidLoginTost = (
    <CToast>
      <CToastHeader closeButton>
        <div className="text-center fw-bold me-auto text-danger fs-4">Error</div>
      </CToastHeader>
      <CToastBody>Invalid username or password.</CToastBody>
    </CToast>
  )

  const authenticateLogin = () => {
    if (!username || !password) {
      addToast(invalidLoginTost)
      return
    }

    AuthenticateApiService.login(username, password)
      .then((result) => {
        StorageService.set('token', result)
        navigateToDashboard()
      })
      .catch((err) => {
        addToast(invalidLoginTost)
        console.error('Login error:', err)
      })
  }

  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CTooltip content="Username">
                          <CFormInput
                            placeholder="Username"
                            autoComplete="username"
                            required
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </CTooltip>
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CTooltip content="Password">
                          <CFormInput
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </CTooltip>
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            type="button"
                            color="primary"
                            className="px-4"
                            onClick={authenticateLogin}
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          {/* <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton> */}
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>HRMS</h2>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default Login
