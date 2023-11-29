import React from 'react';

const Contact = () => {
    return (
        <div className='w-4/5 mx-auto my-10'>
            <div className='text-center my-10'>
                <h1 className='text-5xl font-extrabold text-black font-lato italic'>Swiftscan diagnostic Center</h1>
                <p className='text-xl font-semibold'>Our aim is to serve humanity</p>
            </div>
            <div className='text-center my-10'>
                <h1 className='text-xl'>For any query, email us</h1>
                <h1 className='text-lg mt-5 text-blue-600 cursor-pointer'>swiftscan@diagnostics.com</h1>
                <h1 className='text-lg mt-5 text-blue-600 cursor-pointer'>swiftscan@gmail.com</h1>
                <h1 className='text-lg mt-5 text-blue-600 cursor-pointer'>swiftscan@yahoo.com</h1>
                <h1 className='text-lg mt-5 text-blue-600 cursor-pointer'>swiftscan@hotmail.com</h1>
            </div>
        </div>
    );
};

export default Contact;