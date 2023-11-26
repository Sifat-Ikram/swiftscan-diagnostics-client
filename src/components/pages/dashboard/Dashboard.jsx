import React from 'react';
import { FaAtlas, FaBars, FaCalendarAlt, FaCalendarCheck, FaHome, FaShoppingBag, FaShoppingCart, FaTools, FaUsers } from "react-icons/fa";
import { MdMenu, MdMessage, MdPayment, MdReviews, MdInsertPhoto } from "react-icons/md";
import { PiNotebookFill } from "react-icons/pi";
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    // const [cart] = useCart();
    // const [ isAdmin ] = useAdmin();
    return (
        <div className='w-11/12 mx-auto flex'>
            <div className='w-64 min-h-screen p-5 bg-[#0845F4] uppercase'>
                <a className="font-cinzel block text-center text-white cursor-pointer mb-10" href='/'>
                    <h1 className='text-2xl font-extrabold'>swiftscan</h1>
                    <h1 className='text-base font-semibold'>diagnostic</h1>
                </a>
                <ul className='space-y-5 my-10'>
                    <li><NavLink to={'/dashboard/myProfile'} style={({ isActive }) => ({ background: isActive ? "#0830A5" : "" })} className='flex items-center text-white font-cinzel gap-2 text-base p-2 rounded-md'>
                        <FaHome></FaHome>
                        <h1 className='font-bold'>My Profile</h1>
                    </NavLink></li>
                    <li><NavLink to={'/dashboard/myBookings'} style={({ isActive }) => ({ background: isActive ? "#0830A5" : "" })} className='flex items-center ga text-white font-cinzel gap-2 text-base p-2 rounded-md'>
                        <FaCalendarCheck></FaCalendarCheck>
                        <h1 className='font-bold'>my bookings</h1>
                    </NavLink></li>
                    <li><NavLink to={'/dashboard/testResult'} style={({ isActive }) => ({ background: isActive ? "#0830A5" : "" })} className='flex items-center text-white font-cinzel gap-2 text-base p-2 rounded-md'>
                        <MdPayment></MdPayment>
                        <h1 className='font-bold '>Test Result</h1>
                    </NavLink></li>
                    {/* <>
                        <li><NavLink to={'/dashboard/allUser'} style={({ isActive }) => ({ background: isActive ? "#0830A5" : "" })} className='flex items-center text-white font-cinzel gap-2 text-base p-2 rounded-md'>
                            <FaUsers></FaUsers>
                            <h1 className='font-bold'>All Users</h1>
                        </NavLink></li>
                        <li><NavLink to={'/dashboard/addTest'} style={({ isActive }) => ({ background: isActive ? "#0830A5" : "" })} className='flex items-center  text-white font-cinzel gap-2 text-base p-2 rounded-md'>
                            <FaTools></FaTools>
                            <h1 className='font-bold'>Add A Test</h1>
                        </NavLink></li>
                        <li><NavLink to={'/dashboard/AllTest'} style={({ isActive }) => ({ background: isActive ? "#0830A5" : "" })} className='flex items-center text-white font-cinzel gap-2 text-base p-2 rounded-md'>
                            <FaBars></FaBars>
                            <h1 className='font-bold '>All Tests</h1>
                        </NavLink></li>
                        <li><NavLink to={'/dashboard/reservation'} style={({ isActive }) => ({ background: isActive ? "#0830A5" : "" })} className='flex items-center text-white font-cinzel gap-2 text-base p-2 rounded-md'>
                            <PiNotebookFill></PiNotebookFill>
                            <h1 className='font-bold'>Reservations</h1>
                        </NavLink></li>
                        <li><NavLink to={'/dashboard/addBanner'} style={({ isActive }) => ({ background: isActive ? "#0830A5" : "" })} className='flex items-center ga text-white font-cinzel gap-2 text-base p-2 rounded-md'>
                            <MdInsertPhoto></MdInsertPhoto>
                            <h1 className='font-bold'>Add Banner</h1>
                        </NavLink></li>
                    </> */}
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;