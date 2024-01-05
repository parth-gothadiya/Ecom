import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Header from './header';
import { IconButton, Rating } from '@mui/material';
import { Button } from 'react-bootstrap';
import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import './home.css'
function Home() {

    const [data1, setData1] = useState([]);
    var Navigate = useNavigate()

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products/")
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
                    aria-label="Loading . . ." />
            </div>
        </>
    }

    // const truncateText = (text) => {
    //     return text.length > 100 ? `${text.substring(0, 100)}...` : text;
    // };

    const shorttitle = (text) => {
        return text.length > 50 ? `${text.substring(0, 20)} ...` : text;

    };

    return (
        <>
            <Header />

            <div className=' d-flex flex-wrap baju col '>
                {
                    data1?.map((item, i) => {
                        return (
                            <div key={i} onClick={() => Navigate(`/product/${item.id}`)} >
                                <Card style={{ width: '18rem' }} className='mb-5 cursor-pointer'>
                                    <Card.Text className='ms-3 mt-2'>{item.id}</Card.Text>
                                    <div className='max img-fluid'>
                                        <Card.Img variant="top" src={item.image} style={{ height: '350px', width: '400px', objectFit: 'contain' }} className='pt-5 m-0' />
                                    </div>
                                    <Card.Body>
                                        <hr width='100%' />
                                        <Card.Title> <b>Price -</b> ${item.price}</Card.Title>
                                        <Card.Title><b>{shorttitle(item.title)}</b></Card.Title>
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
                                        <Card.Link className='me-4'><Button variant="outline-warning">Buy Now</Button></Card.Link>

                                        <Link to={'/'}><Card.Link><Button variant="outline-info">Add To Cart</Button></Card.Link></Link>
                                    </Card.Body>
                                </Card >
                            </div>
                        )
                    })
                }
            </div >
            <Footer />
        </>
    );
}
export default Home;