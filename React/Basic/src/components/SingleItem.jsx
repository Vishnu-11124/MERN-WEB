import React from 'react'

const SingleItem = ({item}) => {

  let handleBackground = () => {
    document.querySelector('#id').style.backgroundColor = "lightblue";
  }

  return (
    <>
      <li id='id' className="list-group-item d-flex ">{item} <button onClick={handleBackground} className="text-primary bg-warning mx-5">Buy</button></li>
    </>
  )
}

export default SingleItem
