import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Products from './components/Products.jsx'
import HeroSection from './components/HeroSection.jsx'
import { MainWrapper } from './db/Main.jsx'



const App = () => {
  return (
    <>
      <MainWrapper>
        <Header />
        <HeroSection/>
        <Products/>
        <Footer/>
      </MainWrapper>
    
    </>
  )
}

export default App
