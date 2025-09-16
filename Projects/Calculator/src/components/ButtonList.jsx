import React from 'react'

const ButtonList = ({values}) => {
  return (
    <>
        <div className="row g-2">
                {
                    values.map((value) => ( typeof value === 'number'  ? <div className="col-3"><button className="btn btn-secondary w-100">{value}</button></div> : <div className="col-3"><button className="btn btn-warning w-100">{value}</button></div>))
                }
        </div>
    </>
  )
}

export default ButtonList
