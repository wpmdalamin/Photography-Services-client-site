import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full rounded-none">
            <div className='carousel-img rounded-none'>
                <img src={image} alt="" className="w-full h-auto rounded-none" />
            </div>
            <div>
                <div className="absolute left-24 top-1/4">
                    <h1 className='text-4xl font-bold text-white'>
                        BEST PHOTOGRAPHY SERVICES
                        <br />
                        IN THE WORLD
                    </h1>
                </div>
                <div className="absolute left-24 top-1/2">
                    <p className='text-xl text-white'>I am a professional photographer, <br/> I have been involved in this work for the last 10 years.</p>
                </div>
                <div className="absolute w-2/5 left-24 top-3/4">
                    <Link to="/services"><button className="btn btn-secondary mr-5">Services</button></Link>
                </div>
                <div className="absolute flex justify-center right-1/2 bottom-2">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;