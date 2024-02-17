import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function useRedirect(pathname) {
  let navigate = useNavigate()

  useEffect(() => {
    let sess = sessionStorage.getItem('token')
    console.log(pathname)
    if (!sess) {
      navigate('/')
    } else {
      navigate(pathname == '/' ? 'dashboard' : pathname)
    }
  }, [pathname])
}

export default useRedirect
