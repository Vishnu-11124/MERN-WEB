import React from 'react'

const SingleItem = ({item, bought, handleBackground}) => {


  return (
    <>
      <li id='id' className={` list-group-item d-flex ${ bought && 'active' }`} >{item} <button onClick={handleBackground} className="text-primary bg-warning mx-5">Buy</button></li>
    </>
  )
}

export default SingleItem
