import React from 'react';
import img1 from '../../images/banner/img-1.jpg';
import img2 from '../../images/banner/img-2.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        prev: 2,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 1
    },
]

const Banner = () => {
    return (
        <div className="carousel w-full sm:h-screen md:h-96">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;