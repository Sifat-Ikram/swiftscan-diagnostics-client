import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Reservations = () => {
    const axiosSecure = useAxiosSecure();

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get('http://localhost:4321/cart/admin');
            return res.data;
        }
    })

    const handleDelete = item => {
        
        Swal.fire({
            title: "Are you really want to delete this test?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`http://localhost:4321/cart/admin/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Test Deleted!",
                                text: "Test has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }
    

    return (
        <div className='w-11/12 py-10 mx-auto'>
            <div className='w-full bg-[#0845F4] py-5'>
                <h1 className='text-4xl text-center text-white uppercase text-extrabold'>all bookings</h1>
            </div>
            <div className='p-2 mt-10'>
                <div className="mt-3 overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#0845F4] rounded-lg'>
                            <tr>
                                <th className='text-base font-semibold text-white'>Image</th>
                                <th className='text-base font-semibold text-white'>Name</th>
                                <th className='text-base font-semibold text-white'>email</th>
                                <th className='text-base font-semibold text-white'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((item) => <tr key={item._id}>
                                    <th>
                                        <div>
                                            <img src={item.image} className='h-24 w-36' alt="" />
                                        </div>
                                    </th>
                                    <td>
                                        <div>
                                            <div className="font-bold">{item.title}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div>{item.email}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <MdDelete onClick={() => handleDelete(item)} className='p-2 text-4xl text-white bg-red-700 rounded-md cursor-pointer'></MdDelete>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reservations;