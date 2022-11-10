import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import img1 from '../../images/w-1.jpg';
import img2 from '../../images/w-2.jpg';
import img3 from '../../images/w-3.jpg';
import img4 from '../../images/w-4.jpg';
import img5 from '../../images/w-5.jpg';
import img6 from '../../images/w-6.jpg';
import img7 from '../../images/w-7.jpg';
import img8 from '../../images/w-8.jpg';
import img9 from '../../images/w-9.jpg';
import img10 from '../../images/w-10.jpg';
import img11 from '../../images/w-11.jpg';
import img12 from '../../images/w-12.jpg';

const RecentWork = () => {

    const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12 ]
    return (
        <div className='bg-lime-800 py-8'>
            <p className='text-center text-white'>TAKE A QUICK LOOK AT</p>
            <h3 className='text-5xl text-bold m-0 text-center pb-4 text-white'>Recent Work</h3>

            <div className='sm:mx-1 md:mx-5'>
                <PhotoProvider>
                    <div className="foo grid sm:grid-cols-1 md:grid-cols-4 sm:gap-4 md:gap-8">
                        {images.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                <img className='' src={item}  style={{ objectFit: 'cover' }}  alt="" />
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default RecentWork;