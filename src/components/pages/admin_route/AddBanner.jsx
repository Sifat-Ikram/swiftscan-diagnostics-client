import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBanner = () => {
    const { register, handleSubmit, reset } = useForm();

    const { data: tests = [] } = useQuery({
        queryKey: ['tests'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:4321/banner');
            return res.data;
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        }
    })
    console.log(tests.length > 0 ? tests[0]._id : "No tests data available");

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.data.display_url) {
            const bannerInfo = {
                title: data.title,
                text: data.text,
                image: data.image
            }

            await axios.put(`http://localhost:4321/banner/${tests[0]._id}`, bannerInfo)
            .then(res => {
                console.log(res);
                
                Swal.fire("Banner information updated successfully");
                reset();
            })
        }
    }


    return (
        <div className='w-11/12 py-10 mx-auto'>
            <div className="my-10">
                <div className="w-4/5 mx-auto">
                    <div className="w-11/12 gap-8 mx-auto">
                        <div className="flex-1 text-center py-10 bg-[#0845F4] w-full">
                            <h1 className="text-5xl font-bold text-white">Add Banner</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 mx-auto space-y-7'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Banner title</span>
                                </label>
                                <input name='title' type="text" {...register("title")} placeholder="give a title" className="w-full input input-bordered" required />
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
                                <input type="file" {...register("image")} className="w-full max-w-xs file-input file-input-bordered" />
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