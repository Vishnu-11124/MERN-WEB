import react from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {

  return (
  <>
      <Navbar title="TextUtils" />
      <div className="container my-8">
         <TextForm heading="Enter the text to analyze: "/>
      </div>
  </>
  )
}

export default App
