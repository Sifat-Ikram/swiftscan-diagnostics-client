import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete, MdEditNote } from 'react-icons/md';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const AdminAllTest = () => {
    const axiosPublic = useAxiosPublic();

    const { data: tests = [], refetch } = useQuery({
        queryKey: ['tests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/service');
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
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://swiftscan-diagnostics-server-7xwefv715-md-sifat-ikrams-projects.vercel.app/service/${item._id}`)
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
                <h1 className='text-white uppercase text-4xl text-extrabold text-center'>all test</h1>
            </div>
            <div className='p-2 mt-10'>
                <div className="overflow-x-auto mt-3">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#0845F4] rounded-lg'>
                            <tr>
                                <th className='text-base font-semibold text-white'></th>
                                <th className='text-base font-semibold text-white'>Name</th>
                                <th className='text-base font-semibold text-white'>Date</th>
                                <th className='text-base font-semibold text-white'>Action</th>
                                <th className='text-base font-semibold text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tests.map((item) => <tr key={item._id}>
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
                                            <div>{item.date}</div>
                                        </div>
                                    </td>
                                    <td><Link to={`/dashboard/adminUpdate/${item._id}`}>
                                    <MdEditNote className='text-4xl bg-[#ac7e13af] text-white p-2 cursor-pointer rounded-md'></MdEditNote>
                                    </Link></td>
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

export default AdminAllTest;