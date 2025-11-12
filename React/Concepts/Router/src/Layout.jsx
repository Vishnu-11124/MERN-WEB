import React from 'react'
import ClothStoreHeader from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <ClothStoreHeader/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
