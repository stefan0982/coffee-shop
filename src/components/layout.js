
import React  from "react"

import "./layout.css"
import './bootstrap.min.css'
import Navbar from './Globals/Navbar'
import Footer from './Globals/Footer'

const Layout = ({ children }) => {

  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}



export default Layout
