import React from 'react'

const HeaderName = ({titleName}) => {
    let title = titleName;
  return (
    <>
      <h1 className='text-center'>{title}</h1>
    </>
  )
}

export default HeaderName
