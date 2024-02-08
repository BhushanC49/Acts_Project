import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://www.cdac.in/" target="_blank" rel="noopener noreferrer">
          CDAC
        </a>
        <span className="ms-1">&copy; 2023 ACTS.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.cdac.in/" target="_blank" rel="noopener noreferrer">
          CDAC ACTS
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
