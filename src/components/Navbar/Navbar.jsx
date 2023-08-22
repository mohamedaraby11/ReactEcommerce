import React from 'react'
import style from './Navbar.module.css'
import myLogo from '../../finalProject assets/freshcart-logo.svg'
export default function Navbar() {
  return <>
           <nav class="navbar navbar-expand-sm navbar-light bg-light">
                  <div class="container">
                    <a class="navbar-brand" href="#">
                       <img src={myLogo} alt='logo' />
                    </a>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                          
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Carts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Brands</a>
                            </li>
                            
                        </ul>
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                          
                            <li class="nav-item d-flex align-items-center">
                                <i className="fab fa-facebook mx-2" href="#"></i>
                                <i className="fab fa-twitter mx-2" href="#"></i>
                                <i className="fab fa-instagram mx-2" href="#"></i>
                                <i className="fab fa-tiktok mx-2" href="#"></i>
                                <i className="fab fa-linkedin mx-2" href="#"></i>
                                <i className="fab fa-youtube mx-2" href="#"></i>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Logout</a>
                            </li>
                   
                            
                        </ul>
                    </div>
              </div>
            </nav>
    </>
  
}
