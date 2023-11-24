import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const navLinks = <>
        <li><a className='rounded-md uppercase' href={'/'}>HOME</a></li>
        <li><a className='rounded-md uppercase' href={'/allTest'}>All Tests</a></li>
        <li><a className='rounded-md uppercase' href={'/dashboard'}>DASHBOARD</a></li>
        <li><a className='rounded-md uppercase' href={'/contact'}>CONTACT US</a></li>
        <li><a className='rounded-md uppercase' href={'/about'}>About Us</a></li>
        <li><a className='rounded-md uppercase' href={'/signUp'}>Sign up</a></li>
        
                
    </>

    return (
        <div>
            <div className="navbar bg-[#0845F4] w-full px-28">
                <div className="navbar-start text-white">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-[#0845F4] font-semibold rounded-xs menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="font-lato block text-left cursor-pointer" href='/'>
                        <h1 className='text-2xl font-extrabold uppercase italic'>SwiftScan</h1>
                        <h1 className='text-base font-semibold uppercase'>diagnostics</h1>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white font-bold menu-horizontal px-1 space-x-3">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/signIn'}>
                        <button className='btn btn-outline all-btn text-white'>Sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;