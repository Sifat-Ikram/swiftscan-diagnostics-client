import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const SignIn = () => {
    const { logIn } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    const onSubmit = (data) => {

        logIn(data.email, data.password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : '/')
                setSuccess('');

            })
            .catch(err => {
                console.error(err.message);
                setError(err.message);
            })
    }

    return (
        <div>
            <div className="my-10">
                <div className="w-3/4 mx-auto">
                    <div className="w-2/3 mx-auto gap-8">
                        <div className="flex-1 text-center py-10 bg-[#0845F4] w-full">
                            <h1 className="text-5xl font-bold text-white">Sign in here!</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto space-y-7'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" {...register("email")} placeholder="email" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' {...register("password")} type="password" placeholder="password" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <button type='submit' className='btn bg-[#0845F4] hover:bg-[#0845F4] w-full text-white'>Sign in</button>
                            </div>
                            <div>
                                {
                                    error && <p>{error}</p>
                                }
                            </div>
                            <h1>Don't have an account yet, <a className='text-blue-700' href='/signUp'>Sign up</a> here</h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;