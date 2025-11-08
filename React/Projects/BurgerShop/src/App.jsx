import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import BurgerList from './component/BurgerList'
import Home from './component/Home'
import Testimonials from './component/Testimonials'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <BurgerList/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
