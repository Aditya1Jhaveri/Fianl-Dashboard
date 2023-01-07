import './style.css'
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

const Navbar = () => {
  // let handler = () => {
  //   setSidebar(false)
  //   document.addEventListener('mousedown', handler)
  // }

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
