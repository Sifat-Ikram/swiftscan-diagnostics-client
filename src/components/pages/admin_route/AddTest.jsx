import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import axios from 'axios';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddTest = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

       

        if (res.data.data.display_url) {
            const testInfo = {
                title: data.title,
                price: parseFloat(data.price),
                date: data.date,
                details: data.details,
                slots: [
                   {
                      "id": 1,
                      "time": data.time1,
                      "availability": data.status1
                   },
                   {
                      "id": 2,
                      "time": data.time2,
                      "availability": data.status2
                   },
                   {
                      "id": 3,
                      "time": data.time3,
                      "availability": data.status3
                   }
                ],
                image: res.data.data.display_url
            }

            const testRes = await axios.post('https://swiftscan-diagnostics-server-7xwefv715-md-sifat-ikrams-projects.vercel.app/service', testInfo);
            
            if (testRes.data.insertedId) {
                Swal.fire("Test added successfully");
                reset();
            }
        }

    }

    return (
        <div className="my-10">
            <div className="w-5/6 mx-auto">
                <div className="flex-1 text-center py-10 bg-[#0845F4] w-full">
                    <h1 className="text-5xl font-bold text-white">Add a Test here</h1>
                </div>
                <div className="w-2/3 mx-auto gap-8">
                    <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto space-y-7'>
                        <div>
                            <label className="label">
                                <span className="label-text">Test Name</span>
                            </label>
                            <input {...register("title")} type="text" placeholder="Type your name here" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Test Price</span>
                            </label>
                            <input {...register("price")} type="text" placeholder="price" className="input input-bordered w-full" />
                        </div>
                        <div className='flex-1'>
                            <label className="label">
                                <span className="label-text">Test Date</span>
                            </label>
                            <input {...register("date")} type="date" placeholder="Your photo url" className="input input-bordered w-full" />
                        </div>
                        <div className='lg:flex justify-between gap-3'>
                            <div className='flex-1'>
                                <label className="label">
                                    <span className="label-text">Time slots 1</span>
                                </label>
                                <select {...register("time1")} className="select select-bordered w-full max-w-xs">
                                    <option value={"09:00AM"}>09:00AM</option>
                                    <option value={"12:00PM"}>12:00PM</option>
                                    <option value={"02:00PM"}>02:00PM</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label className="label">
                                    <span className="label-text">availability slots</span>
                                </label>
                                <select {...register("status1")} className="select select-bordered w-full max-w-xs">
                                    <option value={"available"}>Available</option>
                                    <option value={"unavailable"}>Unavailable</option>
                                </select>
                            </div>
                        </div>
                        <div className='lg:flex justify-between gap-3'>
                            <div className='flex-1'>
                                <label className="label">
                                    <span className="label-text">Time slots 2</span>
                                </label>
                                <select {...register("time2")} className="select select-bordered w-full max-w-xs">
                                    <option value={"09:00AM"}>09:00AM</option>
                                    <option value={"12:00PM"}>12:00PM</option>
                                    <option value={"02:00PM"}>02:00PM</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label className="label">
                                    <span className="label-text">availability slots</span>
                                </label>
                                <select {...register("status2")} className="select select-bordered w-full max-w-xs">
                                    <option value={"available"}>Available</option>
                                    <option value={"unavailable"}>Unavailable</option>
                                </select>
                            </div>
                        </div>
                        <div className='lg:flex justify-between gap-3'>
                            <div className='flex-1'>
                                <label className="label">
                                    <span className="label-text">Time slots 3</span>
                                </label>
                                <select {...register("time3")} className="select select-bordered w-full max-w-xs">
                                    <option value={"09:00AM"}>09:00AM</option>
                                    <option value={"12:00PM"}>12:00PM</option>
                                    <option value={"02:00PM"}>02:00PM</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label className="label">
                                    <span className="label-text">availability slots</span>
                                </label>
                                <select {...register("status3")} className="select select-bordered w-full max-w-xs">
                                    <option value={"available"}>Available</option>
                                    <option value={"unavailable"}>Unavailable</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea {...register("details")} type="text" className="textarea textarea-bordered w-full" placeholder="Write a description"></textarea>
                        </div>
                        <div className='flex-1'>
                            <label className="label">
                                <span className="label-text">Test Photo</span>
                            </label>
                            <input type="file" {...register("image")} className="file-input w-full max-w-xs" />
                        </div>
                        <div>
                            <button type='submit' className='btn  bg-[#0845F4] hover:bg-[#0845F4] w-full text-white font-semibold text-lg'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTest;