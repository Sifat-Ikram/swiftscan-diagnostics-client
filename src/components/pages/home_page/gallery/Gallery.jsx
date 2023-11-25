import React from 'react';
import Marquee from "react-fast-marquee";
import img_1 from "../../../../assets/Gallery/img_1.jpg";
import img_2 from "../../../../assets/Gallery/img_2.jpg";
import img_3 from "../../../../assets/Gallery/img_3.jpg";
import img_5 from "../../../../assets/Gallery/img_5.jpg";
import img_6 from "../../../../assets/Gallery/img_6.jpg";
import img_7 from "../../../../assets/Gallery/img_7.jpg";

const Gallery = () => {

    return (
        <div className='mb-10'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold font-lato'>Gallery</h1>
                <p className='text-lg'>We are sighted at a serene environment with the standard facilities</p>
            </div>
            <div>
                <Marquee delay={330}>
                    <img src={img_1} className='h-40 space-x-5' alt="" />
                    <img src={img_2} className='h-40 space-x-5' alt="" />
                    <img src={img_3} className='h-40 space-x-5' alt="" />
                    <img src={img_5} className='h-40 space-x-5' alt="" />
                    <img src={img_6} className='h-40 space-x-5' alt="" />
                    <img src={img_7} className='h-40 space-x-5' alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;