import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toast'
import { useForm } from "react-hook-form";
import { updateProfile } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    // const axiosPublic = useAxiosPublic();
    const { createUser, googleRegister } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleGoogleRegister = () => {
        googleRegister()
            .then(res => {
                console.log(res);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
            })
            .catch(err => console.error(err.message))
    }

    const onSubmit = (data) => {
        console.log(data)

        const regex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (data.password.length < 6) {
            return <p>Your password should not be less than 6 characters</p>
        }
        else if (regex.test(data.password)) {
            return <p>You can not use any capital letter or any special characters</p>
        }

        setError('');

        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user);


                setSuccess('');
                updateProfile(res.user, {
                    displayName: data.name,
                    photoUrl: data.photo
                })
                    .then(() => {
                        console.log('Profile updated');
                    })
                    .catch(err => {
                        console.error(err.message);
                    })


                


            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })
    }

    return (
        <div>
            <div className="my-10">
                <div className="w-5/6 mx-auto">
                    <div className="w-2/3 mx-auto gap-8">
                        <div className="flex-1 text-center py-10 bg-[#0845F4] w-full">
                            <h1 className="text-5xl font-bold text-white">Sign up now!</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto space-y-7'>
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
                                    <input name='photoUrl' {...register("photoUrl")} type="text" placeholder="Your photo url" className="input input-bordered w-full" />
                                </div>
                                <div className='flex-1'>
                                    <label className="label">
                                        <span className="label-text">Your Blood Group</span>
                                    </label>
                                    <select  {...register("bloodGroup")} className="select select-bordered w-full max-w-xs">
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
                                    <select {...register("district")} className="select select-bordered w-full max-w-xs">
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
                                    <select {...register("upazila")} className="select select-bordered w-full max-w-xs">
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
                            <h1>Already have an account? <a className='text-blue-700' href='/signIn'>Sign in</a> here</h1>
                            {
                                error && <p className='text-red-600'>{error}</p>
                            }
                        </form>
                        <div className='flex justify-center mt-5'>
                            <button onClick={handleGoogleRegister} className='w-1/3 mx-auto btn btn-outline hover:text-white border-[#0845F4] hover:bg-[#0845F4]'><FaGoogle></FaGoogle> Sign up with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;