import React, { useEffect, useState } from 'react'
import Header from './header'
import axios from 'axios';
import Footer from './footer';
// import { useParams } from 'react-router-dom';

import { Link, useParams } from 'react-router-dom';
import './product.css';
import { Rating } from '@mui/material';
import { BeatLoader, PropagateLoader, RingLoader } from 'react-spinners';



function Product() {

    var params = useParams()
    console.log("params =", params.id);

    // const { Id } = useParams();
    // console.log(Id, 'Id')

    const [item, setItem] = useState()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then((data) => {
                setItem(data?.data)
                data && setLoader(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    if (loader) {
        return <>
            <div className='set'>
                <BeatLoader color="#ffbd00"
                    size={20}
                    aria-label="Loading . . ." />
            </div>
        </>
    }


    return (
        <>
            <Header />

            <div >


                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-20 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">

                            <div style={{ height: '400px', width: '400px', objectFit: 'cover' }}>
                                <img alt="ecommerce" className="w-100 lg:h-auto h-64  object-center rounded pe-5 okk img-fulid"
                                    src={item?.image} />
                            </div>

                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item?.title}</h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">

                                        <Rating name="half-rating-read" defaultValue={item?.rating?.rate} precision={0.5} readOnly /> .     {item?.rating?.rate}

                                        <span class="text-gray-600 ml-3"></span>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>

                                </div>
                                <h1 className="text-sm title-font text-gray-500 tracking-widest"><h5><b>CATEGORY - </b><Link to={'/categories'} className='text-decoration-none'>{item?.category }</Link></h5></h1>

                                <p className="leading-relaxed">{item?.description}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    <div className="flex">
                                        <span className="mr-3">Color</span>
                                        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                    </div>
                                    <div className="flex ml-6 items-center">
                                        <span className="mr-3">Size</span>
                                        <div className="relative">
                                            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                                <option>SM</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                                <option>XLL</option>
                                            </select>
                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="mr-3 ms-4"><b>Count -</b> {item?.rating?.count}</span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-dark-900 h3 me-5"><b>$ {item?.price}</b></span>
                                   <Link to={'/VerticalLinearStepper'}><button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6  mb-0 focus:outline-none hover:bg-indigo-600 rounded items-center ">BUY NOW</button></Link>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 
                                    mb-0 focus:outline-none hover:bg-indigo-600  rounded items-center ms-2 ">Add to Cart</button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>



            <Footer />
        </>
    )
}

export default Product;
