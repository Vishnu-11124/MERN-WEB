import React from 'react'

const Footer = () => {
  return (
    <footer className="py-4">
        <div className="container">
            <div className="row align-items-center py-4">
                <div className="col-12 col-lg-3 text-center text-lg-start text-primary">
                    <h1>TextUtils</h1>
                </div>
                <div className="col-12 col-lg-6 navbar-expand text-center">
                    <ul className="list-unstyled d-block d-lg-flex justify-content-center mb-3 mb-lg-0">
                        <li className="nav-item">
                            <a className="text-primary text-decoration-none me-lg-3" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-primary text-decoration-none me-lg-3" href="">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-primary text-decoration-none me-lg-3" href="">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-primary text-decoration-none me-lg-3" href="">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-primary text-decoration-none" href="">Contact</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="row pb-3">
                <div className="col-12 text-center small text-primary">
                    © 2023 FreeFrontend.dev. All rights reserved. <a className="d-block d-lg-inline text-primary mx-1" href="">Privacy Policy</a> <a className="d-block d-lg-inline text-primary mx-1" href="">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
