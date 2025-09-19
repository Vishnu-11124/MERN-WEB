import React from 'react'
import SingleItem from './SingleItem'

const ListItems = ({list}) => {

  
  return (
    <>
      {/* Display List of Cars using map() */}
        <ul className="list-group">
          {list.map((listItem) => ( <SingleItem key={listItem} item={listItem} /> )  )}  
        </ul> 
    </>
  )
}

export default ListItems
