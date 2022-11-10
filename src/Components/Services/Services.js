import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Hook/useTitle';

const Services = () => {
    const [services, setServices] = useState([])

    useTitle('Services')

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className=''>
            <h3 className='text-5xl text-center py-4'>services</h3>

            <div className="grid md:grid-cols-3 gap-8 py-5" >
                {
                    services.map(service => <div
                        key={service._id}
                        className="border border-slate-500 p-3 rounded"

                    >
                        <h3 className='text-3xl py-3 text-amber-50'>{service.title}</h3>
                        <PhotoProvider>
                            <PhotoView src={service.img}>
                                <img src={service.img} style={{ objectFit: 'cover' }} alt={service.title} />
                            </PhotoView>
                        </PhotoProvider>

                        <p className='pt-2'>{service.description.slice(0, 80)}...</p>
                        <p className='py-2 text-xl text-orange-600'>{service.price}$</p>
                        <button className='btn btn-primary btn-sm'>
                            <Link to={`/service/${service._id}`}>service deatail</Link>
                        </button>

                    </div>)
                }
            </div>
            

        </div>
    );
};

export default Services;