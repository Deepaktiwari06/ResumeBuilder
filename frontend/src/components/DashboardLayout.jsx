import React, { useContext } from 'react'
import Navbar from './Navbar'
import { UserContext } from '../context/userContext'

const DashboardLayout = ({ activeMenu, children }) => {

    const { user } = useContext(UserContext)
  return (
    <div>
      <Navbar/>
      {user && <div className='container mx-auto pt-4 pb-4'>{children}</div>}
    </div>
  )
}

export default DashboardLayout
