import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import useRedirect from '../views/pages/login/useRedirect'
import { useLocation } from 'react-router-dom'

const DefaultLayout = () => {
  let { pathname } = useLocation()
  useRedirect(pathname)
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
