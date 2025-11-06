import React, { useContext } from 'react'
import { Data } from '../App.jsx'

const CompC = () => {

    const title = useContext(Data)
    
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default CompC
