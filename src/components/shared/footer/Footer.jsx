import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-[#0845F4] text-base-content rounded-none">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover text-white font-semibold">About us</a>
                    <a className="link link-hover text-white font-semibold">Contact</a>
                    <a className="link link-hover text-white font-semibold">Blog</a>
                    <a className="link link-hover text-white font-semibold">Press kit</a>
                </nav>
                <div className="font-lato block text-white cursor-pointer" href='/'>
                    <h1 className='text-4xl font-extrabold uppercase'>SwiftScan diagnostics</h1>
                </div>
                <aside className='text-white'>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;