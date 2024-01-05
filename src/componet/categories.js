import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './header';
import Footer from './footer';
import { BeatLoader, RingLoader } from 'react-spinners';
import './categorises.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Categories() {

    const [data1, setData1] = useState([]);
    var navigate = useNavigate()


    useEffect(() => {

        axios.get("https://fakestoreapi.com/products/categories")
            .then((data) => {
                console.log(data?.data);
                setData1(data?.data);
            })
            .catch(error => console.log(error));
    }, [])

    if (data1.length === 0) {
        return <>
            <div className='set'>
                <BeatLoader color="#ffbd00"
                    size={20}
                    aria-label="Loading ..." />
            </div>
        </>
    }

    return (
        <div>
            <Header />
            
            <section class="text-gray-600 body-font" >
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 capitalize">ALL THIS CATEGORIES</h1>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Meant to classify and describe the different types of products in your online shop</p>
                    </div>

                    <div class="flex flex-wrap -m-4">

                        {
                            data1.map((item) => {
                                return (
                                    // <Link to={'/categories/${procatwgories}'}> 
                                        <div class="xl:w-1/3 md:w-1/2 p-4 flex cursor-pointer" onClick={() => {
                                            navigate(`/categories/${item}`)
                                        }}>
                                            <div class="border border-gray-200 p-6 rounded-lg">
                                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                    </svg>
                                                </div>
                                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2 capitalize" >{item || 'example card'}</h2>
                                                <p class="leading-relaxed text-base">a paragraph or two of content on the page representing an entire category of items for sale.</p>
                                            </div>
                                        </div>
                                    // </Link>
                                )
                            })
                        }


                    </div>
                </div>

            </section >
            <Footer />
        </div >
    )
}

export default Categories;