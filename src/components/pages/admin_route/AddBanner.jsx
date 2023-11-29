import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddBanner = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // console.log(data)
        // const imageFile = { image: data.image[0] }
        // const res = await axios.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });

        // if (res.data.data.display_url) {
        //     const testInfo = {
        //         title: data.title,
        //         price: data.text,
        //         image: data.image
        //     }

        //     const testRes = await axios.patch('https://swiftscan-diagnostics-server-lb3etl9gp-md-sifat-ikrams-projects.vercel.app/banner', testInfo);
            
        //     if (testRes.data.modifiedId) {
        //         Swal.fire("Banner information updated successfully");
        //         reset();
        //     }
        // }
    }


    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className="my-10">
                <div className="w-4/5 mx-auto">
                    <div className="w-11/12 mx-auto gap-8">
                        <div className="flex-1 text-center py-10 bg-[#0845F4] w-full">
                            <h1 className="text-5xl font-bold text-white">Add Banner</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto space-y-7'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Banner title</span>
                                </label>
                                <input name='email' type="text" {...register("title")} placeholder="give a title" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Banner Text</span>
                                </label>
                                <input {...register("text")} type="text" placeholder="Type some text" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Banner Image</span>
                                </label>
                                <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <button type='submit' className='btn bg-[#0845F4] hover:bg-[#0845F4] w-full text-white'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBanner;