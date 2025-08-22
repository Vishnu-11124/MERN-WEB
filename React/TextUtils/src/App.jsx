import react, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'
import Footer from './Components/Footer'
import Alert from './Components/Alert'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  return (
  <>
    <BrowserRouter> 
      <Navbar title="TextUtils" />
      <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze: "/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      <Footer/>
    </BrowserRouter>  
  </>
  )
}

export default App
