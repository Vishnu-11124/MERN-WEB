import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const Navbar = (props) => {
  const { title } = props;
  const [mode,setMode] = useState("Dark");


  // Function to toggle between light and dark mode
  const handlemode = () => {
    if (mode === "Dark") {
      setMode("Light");
      document.body.style.backgroundColor = "#343a40"; // Dark background
      document.body.style.color = "white"; // Light text color
    } else {
      setMode("Dark");
      document.body.style.backgroundColor = "white"; // Light background
      document.body.style.color = "black"; // Dark text color
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
            <button className="btn btn-success mx-2" type="submit" onClick={handlemode}>{mode}</button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar

/*
// PropTypes for Navbar component
// This helps in type-checking the props passed to the Navbar component
Navbar.propTypes = {
  title: PropTypes.string.isRequired    
}

// Default props for Navbar component
// This sets a default value for the title prop if it is not provided
Navbar.defaultProps = {
  title: 'Set Title Here'
}

*/