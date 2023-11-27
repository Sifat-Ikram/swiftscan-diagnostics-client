import React from 'react';

const AdminUpdate = () => {
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
};

export default AdminUpdate;