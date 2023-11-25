import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllTest = () => {
    const [value, setValue] = useState([]);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        fetch('tests.json')
            .then(res => res.json())
            .then(data => setTests(data));
    }, [])
    
    const handleSearch = (e) =>{
        // e.preventDefault()
        setValue(e.target.value.toLowerCase());
           
    }
    
    const getFilteredCategory =()=>{
        if(!value){
            return tests;
        }
        else{
            return tests.filter(test => test.date.toLowerCase().includes(value));
        }
    }
    const filteredTests = getFilteredCategory();

    return (
        <div className='w-5/6 mx-auto space-y-10'>
            <div className='flex justify-center items-center mt-10'>
                <input value={value} onChange={handleSearch}  type="text" placeholder="Type here" className="input w-full border-black max-w-xs" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    filteredTests.map(test => <div key={test._id}>
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
        </div>
    );
};

export default AllTest;