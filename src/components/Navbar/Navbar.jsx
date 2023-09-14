import React from 'react'
import style from './Navbar.module.css'
import myLogo from '../../finalProject assets/freshcart-logo.svg'
import { Link } from 'react-router-dom'
export default function Navbar({userData, handleLogout}) {
  return <>
           <nav className="navbar navbar-expand-sm navbar-light bg-light">
                  <div className="container">
                    <Link className="navbar-brand" to="/">
                       <img src={myLogo} alt='logo' />
                    </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">

                        {userData !==null ?         <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                          
                          <li className="nav-item">
                              <Link className="nav-link" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="cart">Carts</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="products">Products</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="categories">Categories</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="brands">Brands</Link>
                          </li>
                          
                      </ul> : null }
                
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                          
                            <li className="nav-item d-flex align-items-center">
                                <i className="fab fa-facebook mx-2" href="#"></i>
                                <i className="fab fa-twitter mx-2" href="#"></i>
                                <i className="fab fa-instagram mx-2" href="#"></i>
                                <i className="fab fa-tiktok mx-2" href="#"></i>
                                <i className="fab fa-linkedin mx-2" href="#"></i>
                                <i className="fab fa-youtube mx-2" href="#"></i>
                            </li>

                            {userData === null ? <> <li className="nav-item">
                                <Link className="nav-link" to="login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="register">Register</Link>
                            </li> </> :   <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                            </li> }
                           
                          
                   
                            
                        </ul>
                    </div>
              </div>
            </nav>
    </>
  
}
