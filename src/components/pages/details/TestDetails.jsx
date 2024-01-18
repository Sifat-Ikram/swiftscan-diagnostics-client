import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useCart from '../../hooks/useCart';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const TestDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const [, refetch] = useCart();

    const { data: tests = [] } = useQuery({
        queryKey: ['tests'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:4321/service');
            return res.data;
        },
        onError: (error) => {
            console.error("Error fetching data:", error);
        }
    })


    const filteredTest = tests.filter(test => test._id === id);


    if (!filteredTest) {
        return <span className="loading loading-dots loading-lg"></span> ;
    }


    const { title, image, date, details, slots, _id, price } = filteredTest[0];

    const handleApply = () => {
        if (user && user.email) {
            
            const cartItem = {
                menuId: _id,
                email: user.email,
                title,
                image,
                price,
                details,
                date
            }
            axiosPublic.post('/cart', cartItem)
                .then(res => {
                    
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your booked this test",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not signed in",
                text: "Please sign in to book test",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "sign in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn');
                }
            });
        }
    }

    return (
        <div className='mb-10 space-y-10'>
            <div className="w-10/12 mx-auto mt-10 space-y-8 text-left">
                <img src={image} className="w-full h-96" alt="" />
                <h1 className="text-4xl font-semibold">{title}</h1>
                <h1 className="text-lg font-medium">Date: {date}</h1>
                <h1 className="text-lg font-medium">Price: ${price}</h1>
                <div>
                    {
                        slots?.map(item => <div key={item.id} className='flex items-center justify-center gap-10'>
                            <h1>{item.time}</h1>
                            <h1>{item.availability}</h1>
                        </div>)
                    }
                </div>
                <h1 className="text-base"><span className="text-2xl font-medium">Description: </span>{details}</h1>
                <div className='flex'>
                    <button onClick={handleApply} className="btn all-btn bg-[#0845F4] text-white font-semibold">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;