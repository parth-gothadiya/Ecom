import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>

            <div className="container">
                <hr/>   
                <footer className="pt-3 pb-0 ">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5><b>Section</b></h5>
                            <ul className="nav flex-column main-menu">
                                <li className="nav-item mb-2"><Link to={'/'} className="nav-link p-0 text-body-secondary">Home</Link></li>
                                <li className="nav-item mb-2"><Link to={'/categories'} className="nav-link p-0 text-body-secondary">Categories</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link to={'/contact'} className="nav-link p-0 text-body-secondary">Contact</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5><b>Section</b></h5>
                            <ul className="nav flex-column main-menu">
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">Home</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">Features</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5><b>Section</b></h5>
                            <ul className="nav flex-column main-menu">
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">Home</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">Features</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">Pricing</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                                <li className="nav-item mb-2"><Link className="nav-link p-0 text-body-secondary">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-5 my-0 border-top">
                        <p>&copy; 2023 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3"><a className="link-body-emphasis"><svg className="bi" width="24" height="24">twitter </svg></a></li>
                            <li className="ms-3"><a className="link-body-emphasis"><svg className="bi" width="24" height="24">instagram </svg></a></li>
                            <li className="ms-3"><a className="link-body-emphasis"><svg className="bi" width="24" height="24">facebook</svg></a></li>
                        </ul>
                        <span className="flex ml-3 pl-3 pe-5 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500 pe-3">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 pe-3">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 pe-3">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                    </div>
                </footer>
            </div>


        </>
    )
}

export default Footer