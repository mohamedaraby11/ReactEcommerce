import React from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout({userData , handleLogout}) {
  return <>

    <Navbar handleLogout={handleLogout} userData={userData} />
    <div className='container'>
      <Outlet></Outlet>
    </div>
    <Footer />
  </>

}
