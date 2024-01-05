import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { BeatLoader } from 'react-spinners';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Rating } from '@mui/material';

function Procategories() {

    const { name } = useParams();

    const [data1, setdata1] = useState([])

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${name}`)
            .then((data) => {
                setdata1(data?.data)
            })
            .catch(function (error) {
                console.log(error);
            })
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
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className='d-flex flex-wrap baju col'>
            {
                data1.map((item) => {
                    return (
                        <>
                            {/* <section class="text-gray-600 body-font">
                                <div class="container px-5 py-24 mx-auto">
                                    <div class="flex flex-wrap -m-4 "> */}


                                        <Card style={{ width: '18rem' }} className='mb-5 cursor-pointer'>
                                            {/* <Card.Text className='ms-3 mt-2'>{.id}</Card.Text> */}
                                            <div className='max '>
                                                <Card.Img variant="top" src={item.image} style={{ height: '300px', width: '400px', objectFit: 'contain' }} className='pt-5 m-0' />
                                            </div>
                                            <Card.Body>
                                                <hr width='100%' />
                                                <Card.Title> <b>Price -</b> ${item.price}</Card.Title>
                                                <Card.Title><b>{item.title}</b></Card.Title>
                                                {/* <Card.Text>
                                            {truncateText(item.description)}
                                        </Card.Text> */}
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item><b>Category </b> - {item.category}</ListGroup.Item>

                                                <ListGroup.Item className='rate'><b>Rating - </b><Rating name="half-rating-read" defaultValue={item.rating.rate} precision={0.5} readOnly />{item.rating.rate}</ListGroup.Item>
                                                <ListGroup.Item><b>Count - </b>{item.rating.count}</ListGroup.Item>
                                            </ListGroup>
                                            <Card.Body>
                                                <Card.Link ><Link variant="outline-warning" className='text-decoration-none ' to={'/VerticalLinearStepper'}><Button variant="outline-warning">Buy Now</Button></Link></Card.Link>

                                                <Card.Link   ><Button variant="outline-info">Add To Cart</Button></Card.Link>
                                            </Card.Body>
                                        </Card >
                                    {/* </div>
                                </div>
                            </section> */}
                        </>
                    )
                })
            }
            </div>
            <Footer />
        </div>
    )
}

export default Procategories
