import './style.css'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <nav className="navbar">
      <FaBars className="button" onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </nav>
  )
}

export default Navbar
