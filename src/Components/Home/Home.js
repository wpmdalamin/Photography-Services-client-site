import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Hook/useTitle';


const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>

            <div className="grid md:grid-cols-3 gap-8 " >
                {
                    services.map(service => <div
                        key={service._id}
                        className="border p-3 rounded"
                    >
                        <h3 className='text-3xl'>{service.title}</h3>
                        <PhotoProvider>
                            <PhotoView src={service.img}>
                                <img src={service.img} style={{ objectFit: 'cover' }} alt={service.title} />
                            </PhotoView>
                        </PhotoProvider>
                        <p>{service.description.slice(0, 80)}...</p>
                        <p>{service.price}$</p>
                        <button className='btn'>
                            <Link to={`/service/${service._id}`}>Service Deatail</Link>
                        </button>

                    </div>)
                }
            </div>

            <div className='text-center py-3'>
                <Link to="/services" className='btn btn-gost'>see all</Link>
            </div>
        </div>
    );
};

export default Home;