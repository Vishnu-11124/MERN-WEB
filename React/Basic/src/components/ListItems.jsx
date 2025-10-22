import React, { useState } from 'react'
import SingleItem from './SingleItem'

const ListItems = ({list}) => {

  let [activeItem,setActiveItem] = useState([])

  let setBackground = (event, listItem) => {
      let newItems = [...activeItem,listItem]
      setActiveItem(newItems)
  }
  
  return (
    <>
      {/* Display List of Cars using map() */}
        <ul className="list-group">
          {list.map((listItem) => ( <SingleItem key={listItem} item={listItem} bought={activeItem.includes(listItem)}  handleBackground={(event) => setBackground (event,listItem)}/> )  )}  
        </ul> 
    </>
  )
}

export default ListItems
