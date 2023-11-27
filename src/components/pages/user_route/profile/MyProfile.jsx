import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { data: currentUser = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/user');
            return res.data;
        }
    })

    if (!user) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    const loggedUser = currentUser.find(cUser => cUser.email === user.email);

    const { bloodGroup, district, email, name, photoUrl, upazila, _id } = loggedUser;

    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold mt-20'>{name}'s Profile</h1>
                <div className='my-10 flex flex-col justify-center items-center'>
                    <img src={photoUrl} alt="" className='h-60 w-60 rounded-full' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='space-y-5 my-10'>
                        <h1 className='text-xl'><span className='text-2xl font-bold mr-5'>Name: </span>{name}</h1>
                        <h1 className='text-xl'><span className='text-2xl font-bold mr-5'>Email: </span>{email}</h1>
                        <h1 className='text-xl'><span className='text-2xl font-bold mr-5'>District: </span>{district}</h1>
                        <h1 className='text-xl'><span className='text-2xl font-bold mr-5'>Upazilla: </span>{upazila}</h1>
                        <h1 className='text-xl'><span className='text-2xl font-bold mr-5'>Blood Group: </span>{bloodGroup}</h1>
                    </div>
                    <div className='mb-20'>
                        <Link to={`/dashboard/update/${_id}`}>
                            <button className='btn btn-outline hover:bg-[#0845F4] border-2 text-[#0845F4] font-bold border-[#0845F4]'>Edit Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;