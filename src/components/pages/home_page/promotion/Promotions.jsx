import React from 'react';
import { Link } from 'react-router-dom';

const Promotions = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col items-center lg:flex-row">
                    <div className='flex-1'>
                        <img src="https://i.ibb.co/2szSdWW/800-Doctors-Talking-Getty-Images-1421919753.jpg" className="max-w-lg h-96 rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">We have the best doctors here</h1>
                        <p className="py-6">Any problem, any test, we are always here for you. Just Sign up and get all facilities.</p>
                        <Link>
                           <button className='btn bg-[#0845F4] hover:bg-[#0845F4] text-white font-bold text-lg'>Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotions;