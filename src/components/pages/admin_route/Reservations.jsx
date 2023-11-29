import React from 'react';
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Reservations = () => {
    const axiosSecure = useAxiosSecure();

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get('https://swiftscan-diagnostics-server-lb3etl9gp-md-sifat-ikrams-projects.vercel.app/cart/admin');
            return res.data;
        }
    })

    const handleDelete = item => {
        
        Swal.fire({
            title: "Are you really want to delete this test?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`https://swiftscan-diagnostics-server-lb3etl9gp-md-sifat-ikrams-projects.vercel.app/cart/admin/${item.menuId}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Test Deleted!",
                                text: "Test has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }
    

    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='w-full bg-[#0845F4] py-5'>
                <h1 className='text-white uppercase text-4xl text-extrabold text-center'>all bookings</h1>
            </div>
            <div className='p-2 mt-10'>
                <div className="overflow-x-auto mt-3">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#0845F4] rounded-lg'>
                            <tr>
                                <th className='text-base font-semibold text-white'>Image</th>
                                <th className='text-base font-semibold text-white'>Name</th>
                                <th className='text-base font-semibold text-white'>email</th>
                                <th className='text-base font-semibold text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((item) => <tr key={item._id}>
                                    <th>
                                        <div>
                                            <img src={item.image} className='w-36 h-24' alt="" />
                                        </div>
                                    </th>
                                    <td>
                                        <div>
                                            <div className="font-bold">{item.title}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div>{item.email}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <MdDelete onClick={() => handleDelete(item)} className='text-4xl cursor-pointer bg-red-700 text-white p-2 rounded-md'></MdDelete>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reservations;