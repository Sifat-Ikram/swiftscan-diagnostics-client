import React from 'react';
import { useForm } from "react-hook-form";

const UpdatePage = () => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <div>
            <div className="my-10">
                <div className="w-5/6 mx-auto">
                    <div className="w-2/3 mx-auto gap-8">
                        <div className="flex-1 text-center py-10 bg-[#0845F4] w-full">
                            <h1 className="text-5xl font-bold text-white">Sign up now!</h1>
                        </div>
                        <form className='w-4/5 mx-auto space-y-7'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name='name' {...register("name")} type="text" placeholder="Type your name here" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" {...register("email")} placeholder="email" className="input input-bordered w-full" required />
                            </div>
                            <div className='lg:flex justify-between gap-3'>
                                <div className='flex-1'>
                                    <label className="label">
                                        <span className="label-text">Avatar</span>
                                    </label>
                                    <input name='photo' {...register("photo")} type="text" placeholder="Your photo url" className="input input-bordered w-full" />
                                </div>
                                <div className='flex-1'>
                                    <label className="label">
                                        <span className="label-text">Your Blood Group</span>
                                    </label>
                                    <select  {...register("bloodGroup")} className="select select-bordered w-full">
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
                                    <select {...register("district")} className="select select-bordered w-full">
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
                                <div className='flex-1'>
                                    <label className="label">
                                        <span className="label-text">Your Upazila</span>
                                    </label>
                                    <select {...register("upazila")} className="select select-bordered w-full">
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
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' {...register("password")} type="password" placeholder="password" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name='password' {...register("password")} type="password" placeholder="password" className="w-full input input-bordered" required />
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