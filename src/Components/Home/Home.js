import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Hook/useTitle';
import RecentWork from '../RecentWork/RecentWork';


const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <Hero></Hero>

            <div className="grid md:grid-cols-3 gap-8 sm:px-1 md:px-5" >
                {
                    services.map(service => <div
                        key={service._id}
                        className="border rounded"
                    >
                        <PhotoProvider>
                            <PhotoView src={service.img}>
                                <img className='m-auto w-full' src={service.img} style={{ objectFit: 'cover' }} alt={service.title} />
                            </PhotoView>
                        </PhotoProvider>
                        <div className='p-3'>
                            <h3 className='text-3xl py-3 text-amber-50'>{service.title}</h3>
                            <p className='pt-2'>{service.description.slice(0, 80)}...</p>
                            <p className='py-2 text-xl text-orange-600'>{service.price}$</p>
                            <button className='btn btn-primary btn-sm'>
                                <Link to={`/service/${service._id}`}>service deatail</Link>
                            </button>
                        </div>

                    </div>)
                }
            </div>

            <div className='text-center py-3'>
                <Link to="/services" className='btn btn-secondary btn-sm'>see all</Link>
            </div>

            <RecentWork></RecentWork>
        </div>
    );
};

export default Home;