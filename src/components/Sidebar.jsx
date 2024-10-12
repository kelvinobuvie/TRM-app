import React from 'react'

import { FaTableList } from "react-icons/fa6";
// import Logo from '../assets/Images';
import { MdGroups } from 'react-icons/md';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { PiNotePencil } from 'react-icons/pi'; 
import { CgNotes } from 'react-icons/cg';
import { GoDotFill } from 'react-icons/go';
// import Overview from '../pages/Overview';
// import Inspections from '../pages/Inspections';
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
  return (
    <>
        <div className='sidebar max-lg:hidden flex flex-col w-[216px] h- px-4 hidden:min-lg:block overflow-auto h-screen mt-0 fixed overflow-y-auto'>
        <div className='mt-[47px] mb-[42px] w-41 h-14'>
            <img src="/LAC_Logo_Alt 2.png" alt="Leadway assurance" />
        </div>
        <div>
            <span className='px-3 mt-10 mb-8 font-bold text-zinc-500'>TRM</span>
        </div>
        <div>
        <ul className='mt-3 text-white '>
            <li className='mb-3 text-sm gap-5 hover:text-orange-500 py-2'>
                <NavLink to="/overview" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                    <BiBarChartAlt2 className='inline-block w-5 h-6 mr-3 -mt-1'></BiBarChartAlt2>
                    Overview
                </NavLink>
            </li>
            <li className='mb-3 text-sm gap-5 hover:text-orange-500 py-2'>
                <NavLink to="/inspections" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                    <FaTableList className='inline-block w-5 h-6 mr-3 -mt-1'></FaTableList>
                    Inspections
                </NavLink>
            </li>
            <li className='mb-3 text-sm hover:text-orange-500 py-2'>
                <NavLink to="/personnel" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                    <MdGroups className='inline-block w-5 h-6 mr-3 -mt-1'></MdGroups>
                    Personnel
                </NavLink>
            </li>
            <li className='mb-3 text-sm gap-5 hover:text-orange-500 py-2'>
                <NavLink to="/workshop" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                    <PiNotePencil className='inline-block w-5 h-6 mr-3 -mt-1'></PiNotePencil>
                    Workshop
                </NavLink>
            </li>
            <li className='mb-3 text-sm gap-5 hover:text-orange-500 py-2'>
                <NavLink to="/report" className={({ isActive }) => (isActive ? 'text-orange-500 px-3' : 'text-white px-3')}>
                    <CgNotes className='inline-block w-5 h-6 mr-3 -mt-1'></CgNotes>
                    Report
                </NavLink>
            </li>
        </ul>
        </div>
        <div className='mt-40'>
            <span className='px-3 text-zinc-500'>
                BUSINESSES
            </span>
            <ul className='mb-3 mt-4 text-sm gap-5 px-3'>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-white'>Marine</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-white'>Marine</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-white'>Marine</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-white'>Marine</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-white'>Marine</span></a></li>
            </ul>
        </div>
    </div>
    
    </>

    
  )
}

export default Sidebar