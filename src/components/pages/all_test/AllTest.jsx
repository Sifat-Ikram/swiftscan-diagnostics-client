import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AllTest = () => {
    const [value, setValue] = useState([]);

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
    
    const handleSearch = (e) =>{
        // e.preventDefault()
        setValue(e.target.value);
           
    }
    
    const getFilteredCategory =()=>{
        if(!value){
            return tests;
        }
        else{
            return tests.filter(test => test.date.includes(value));
        }
    }
    const filteredTests = getFilteredCategory();

    return (
        <div className='w-5/6 mx-auto space-y-10'>
            <div className='flex items-center justify-center mt-10'>
                <input value={value} onChange={handleSearch}  type="text" placeholder="Type here" className="w-full max-w-xs border-black input" />
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    filteredTests.map(test => <div key={test._id}>
                        <div className="shadow-xl card card-compact h-80 bg-base-100">
                            <figure><img src={test.image} className='h-56 w-80' alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Test title: {test.title}</h2>
                                <p>Available date: {test.date}</p>
                                <div className="justify-end card-actions">
                                    <Link to={`/details/${test._id}`}>
                                    <button className="btn btn-outline text-[#0845F4] border-[#0845F4] all-btn">View Details</button>
                                    </Link>
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