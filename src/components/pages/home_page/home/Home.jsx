import React from 'react';
import Banner from '../banner/Banner';
import FeaturedTest from '../featuredTest/FeaturedTest';
import Gallery from '../gallery/Gallery';
import OtherSupport from '../support/OtherSupport';
import Promotions from '../promotion/Promotions';

const Home = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <Banner></Banner>
            <FeaturedTest></FeaturedTest>
            <OtherSupport></OtherSupport>
            <Gallery></Gallery>
            <Promotions></Promotions>
        </div>
    );
};

export default Home;