import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Navbar />
      {children}
    <Footer />  
    </>
  )
}

export default layout
