import React from 'react';
import { BiClinic } from "react-icons/bi";
import { MdBackHand, MdForwardToInbox } from "react-icons/md";

const OtherSupport = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-10'>
            <div className='flex items-center gap-4 rounded bg-base-200 p-2'>
                <div className='rounded-full p-2 border-dashed border-slate-800 border-2'>
                    <BiClinic className='text-4xl'></BiClinic>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-xl font-bold'>Emergency Diagnostic Services</h1>
                    <p className='text-sm'>Emergency Diagnostic Services without extra service charge</p>
                </div>
            </div>
            <div className='flex items-center gap-4 rounded bg-base-200 p-2'>
                <div className='rounded-full p-2 border-dashed border-slate-800 border-2'>
                    <MdBackHand className='text-4xl'></MdBackHand>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-xl font-bold'>One-stop Quality Diagnostic Service</h1>
                    <p className='text-sm'>We provide one stop service for patients for all their diagnostic and test needs</p>
                </div>
            </div>
            <div className='flex items-center gap-4 rounded bg-base-200 p-2'>
                <div className='rounded-full p-2 border-dashed border-slate-800 border-2'>
                    <MdForwardToInbox className='text-4xl'></MdForwardToInbox>
                </div>
                <div className='space-y-2'>
                    <h1 className='text-xl font-bold'>Get Result via Email</h1>
                    <p className='text-sm'>You can request to get your lab results via Email</p>
                </div>
            </div>
        </div>
    );
};

export default OtherSupport;