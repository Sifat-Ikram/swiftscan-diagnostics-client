import React from 'react';
import banner from '../../../../assets/banner.jpg'

const Banner = () => {
    
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className='flex-1'>
                        <img src={banner} className="rounded-lg" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold font-lato text-[#0845F4]">Your Health, Our Priority</h1>
                        <p className="py-6">From diagnostics to dedicated care, your health is our top priority. Trust SwiftScan Diagnostics Center for accurate results and personalized attention</p>
                        <h1>To visit our services, click <a href='/allTest' className='text-[#0830A5]'>here</a></h1>
                        <div className='flex items-center gap-2 mt-10'>
                            <h1 className='text-xl'>Get 20% discount on every test</h1>
                            <button className='btn all-btn bg-[#0830A5] text-white'>swift20</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;