import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';


const TestDetails = () => {
    const { id } = useParams();
    const tests = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const filteredTest = tests.find(test => test._id == id);
    const { title, image, date, details, slots, _id, price } = filteredTest;

    const handleApply = () => {
        if (user && user.email) {
            console.log(user.email);
            const cartItem = {
                menuId: _id,
                email: user.email,
                title,
                image,
                price,
                details
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your booked this test",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not signed in",
                text: "Please sign in to book test",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "sign in"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });
                    navigate('/signIn');
                }
            });
        }
    }

    return (
        <div className='space-y-10 mb-10'>
            <div className="w-10/12 mx-auto mt-10 text-left space-y-8">
                <img src={image} className="h-96 w-full" alt="" />
                <h1 className="font-semibold text-4xl">{title}</h1>
                <h1 className="text-lg font-medium">Date: {date}</h1>
                <h1 className="text-lg font-medium">Price: ${price}</h1>
                <div>
                    {
                        slots.map(item => <div key={item.time} className='flex justify-center gap-10 items-center'>
                            <h1>{item.time}</h1>
                            <h1>{item.availability}</h1>
                        </div>)
                    }
                </div>
                <h1 className="text-base"><span className="text-2xl font-medium">Description: </span>{details}</h1>
                <div className='flex'>
                    <button onClick={handleApply} className="btn all-btn bg-[#0845F4] text-white font-semibold">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;