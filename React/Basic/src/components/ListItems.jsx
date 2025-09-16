import React from 'react'

const ListItems = ({list}) => {
     
  return (
    <>
      {/* Display List of Cars using map() */}
        <ul className="list-group">
          {list.map((listItem) => (<li key={listItem} className="list-group-item">{listItem}</li>) )}  
        </ul> 
    </>
  )
}

export default ListItems
