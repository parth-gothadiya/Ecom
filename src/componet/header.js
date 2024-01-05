import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';
// import { Form } from 'react-router-dom';
// import { Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart, FaStore } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {

    // const [submit, setSubmit] = useState();
    // const [query, setQuery] = useState("")

    // function search(e) {
    //     e.preventDefault()
    //     setQuery(e.target.value)


    // }

    return (
        <>

            <header className=" text-bg-dark  text-white sticky py-1">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to='/' className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none cursor-pointer">
                            <svg className="bi me- my-sm-3 fs-2 p-0 box1 p-0  ms-sm-5 justify-content-lg-center  d-flex" width="100%" height="32" role="img" aria-label="Store"><FaStore /></svg>
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 main-menu">
                            <li><Link to={'/'} className="nav-link px-4 white ">Home</Link></li>
                            <li><Link to={'/categories'} className="nav-link px-4 white">Category</Link></li>
                            <li><Link className="nav-link px-4 white">Pricing</Link></li>

                            <li><Link to={'/contact'} className="nav-link px-4 white">Contact</Link></li>
                            <li><Link className="nav-link px-4 white">About</Link></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-white text-dark" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="text-end d-md-flex justify-content-md-center">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>
                {/* <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">Tailblocks</span>
                        </a>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-gray-900">First Link</a>
                            <a className="mr-5 hover:text-gray-900">Second Link</a>
                            <a className="mr-5 hover:text-gray-900">Third Link</a>
                            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                        </nav>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </header> */}
        </>
    );
}

export default Header;