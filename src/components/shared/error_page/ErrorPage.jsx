import React from 'react';
import error from '../../../assets/404.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={error} alt="" className='h-[500px]' />
            <Link to={'/'}>
                <button className='btn btn-outline all-btn'>Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;