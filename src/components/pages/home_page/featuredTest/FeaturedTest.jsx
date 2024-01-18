import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const FeaturedTest = () => {

    const { data: tests = [] } = useQuery({
        queryKey: ['tests'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:4321/service');
            return res.data;
        },
        onError: (error) => {
            // Handle error (e.g., show an error message)
            console.error("Error fetching data:", error);
        }
    })

    if (!tests.length) {
        return <span className="loading loading-dots loading-lg"></span>;
    }
    

    return (
        <div>
            <h1 className='text-4xl font-bold my-10'>Featured Tests</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    tests.slice(0, 6).map(test => <div key={test._id}>
                        <div className="card card-compact h-80 bg-base-100 shadow-xl">
                            <figure><img src={test.image} className='w-80 h-56' alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Test title: {test.title}</h2>
                                <p>Available date: {test.date}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${test._id}`}><button className="btn btn-outline text-[#0845F4] border-[#0845F4] all-btn">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='my-10 flex justify-center'>
                <Link to={'/allTest'}>
                    <button className='btn all-btn text-white bg-[#0845F4]'>View All</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedTest;