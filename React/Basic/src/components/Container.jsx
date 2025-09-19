import React from 'react'

const Container = ({children}) => {
  return (
    <>
        <div className="card w-25 m-3" >
            {children}
        </div>
    </>
  )
}

export default Container
