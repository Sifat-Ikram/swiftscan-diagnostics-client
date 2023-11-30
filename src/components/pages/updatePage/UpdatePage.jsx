import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdatePage = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const [districts, setDistricts] = useState('');
    const { id } = useParams();


    const { data: user = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get('/user');
            return res.data;
        }
    })

    useEffect(() => {
        fetch('/district.json')
            .then(res => res.json())
            .then(data => {
                setDistricts(data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    const currentUser = user.find(res => res._id === id);

    if (!districts || !currentUser) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    const { district, email, name, photoUrl, _id, bloodGroup } = currentUser;

    const onSubmit = async (data) => {
        
        const imageFile = { image: data.photo[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        

        if (res.data.data.display_url) {
            const testInfo = {
                name: data.name,
                email: data.email,
                photo: data.photo || res.data.data.display_url,
                bloodGroup: data.bloodGroup,
                district: data.district
            }

            const testRes = await axios.patch(`https://swiftscan-diagnostics-server-7xwefv715-md-sifat-ikrams-projects.vercel.app/user/${_id}`, testInfo);
            
            if (testRes.data.modifiedCount) {
                Swal.fire("Test updated successfully");
                reset();
            }
        }
    }

    return (
        <div>
            <div className="my-10">
                <div className="w-5/6 mx-auto">
                    <div className="w-2/3 mx-auto gap-8">
                        <div className="flex-1 text-center py-10 bg-[#0845F4] w-full">
                            <h1 className="text-5xl font-bold text-white">Update Your Profile</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto space-y-7'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name='name' {...register("name")} defaultValue={name} type="text" placeholder="Type your name here" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" defaultValue={email} {...register("email")} placeholder="email" className="input input-bordered w-full" required />
                            </div>
                            <div className='lg:flex justify-between gap-5'>
                                <div className='flex-1'>
                                    <label className="label">
                                        <span className="label-text">Avatar</span>
                                    </label>
                                    <input type="file" {...register("photo")} className="file-input file-input-bordered w-full max-w-xs" />
                                </div>
                                <div className='flex-1'>
                                    <label className="label">
                                        <span className="label-text">Your Blood Group</span>
                                    </label>
                                    <select {...register("bloodGroup")} defaultValue={bloodGroup} className="select select-bordered w-full">
                                        <option disabled>Select your blood group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                            </div>
                            <div className='lg:flex justify-between gap-3'>
                                <div className='flex-1'>
                                    <label className="label">
                                        <span className="label-text">Your District</span>
                                    </label>
                                    <select {...register("district")} defaultValue={district} className="select select-bordered w-full">
                                        {
                                            districts.map(dist => <option key={dist.id} value={dist.name}>{dist.name}</option>)
                                        }
                                    </select>
                                </div>
                            </div>

                            <div>
                                <button type='submit' className='btn  bg-[#0845F4] hover:bg-[#0845F4] w-full text-white font-semibold text-lg'>Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;