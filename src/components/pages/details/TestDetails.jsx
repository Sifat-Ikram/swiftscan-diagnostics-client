import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const TestDetails = () => {
    const { id } = useParams();
    const [tests, setTests] = useState([]);

    useEffect(() => {
        fetch('/tests.json')
            .then(res => res.json())
            .then(data => setTests(data));
    }, [])
    
    console.log(tests);

    const filteredTest = tests.find(test => test._id == id);
    // const { title, image, date, details, slots } = filteredTest;

    // const handleApply = () => {

    // }

    return (
        <div className='space-y-10 mb-10'>
            <div className="w-10/12 mx-auto mt-10 text-left space-y-8">
                <img src={filteredTest.image} className="h-96 w-full" alt="" />
                <h1 className="font-semibold text-4xl">{filteredTest.title}</h1>
                <h1 className="text-lg font-medium">Salary: {filteredTest.date}</h1>
                <div>
                    {/* {
                        slots.map
                    } */}
                </div>
                <h1 className="text-base"><span className="text-2xl font-medium">Description: </span>{filteredTest.details}</h1>
                <div className='flex'>
                    <button className="btn all-btn bg-[#0845F4] text-white font-semibold">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;