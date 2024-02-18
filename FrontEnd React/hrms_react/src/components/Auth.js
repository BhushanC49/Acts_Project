import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'

import React from 'react'
import { AuthService } from '../services/auth.service'

const Auth = (props) => {
  const location = useLocation()
  const role = AuthService.getRole()
  const isLoggedIn = AuthService.isLoggedIn()
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }
  // eslint-disable-next-line react/prop-types
  return props.allowedRoles.some((r) => role.toLowerCase() === r) ? (
    <Outlet />
  ) : (
    <Navigate to="/404" state={{ from: location }} replace />
  )
}

export default Auth
