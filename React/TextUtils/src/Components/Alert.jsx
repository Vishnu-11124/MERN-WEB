import React from 'react'

const Alert = (props) => {
    const { alert } = props;
  return (
    alert && <div className="alert alert-warning alert-dismissible fade show container my-3" role="alert">
        <strong>{alert.type}</strong>: {alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
