import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
import { IoCloseOutline } from "react-icons/io5";
import { GoDotFill } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

import CreateRequestBtn from '../components/CreateRequestBtn';
import Nav from '../components/Nav';


const NewInspection = () => {
    const navigate = useNavigate();
        const Redirect = () => {
        navigate('/inspections')
    }

  return (
    <div className='lg:ml-56 h-full p-4'>
        <Nav title={"Inspections"}/>
        <div className='flex justify-between'>
            <div className='p-4'>
                <p className='text-xl font-semibold text-blue-950'>Create New Inspection</p>
                <p className='text-sm'>See all inspections across all classes</p>
            </div>
            <div  className='py-4 px-9 text-center'>
                <button onClick={Redirect} className='text-gray-400 hover:underline' ><IoCloseOutline className='h-12 w-12'/>close</button>
            </div>
        </div>
        <div className='py-10 grid justify-center '>
            <div className='grid gap-3 lg:flex justify-center'>
                <div className='border rounded-lg hover:border-orange-300'><img src="/pre-loss inspection.png" alt="" /></div>
                <div className='border rounded-lg hover:border-orange-300'><img src="/post-loss inspection.png" alt="" /></div>
            </div>
            <div className='mt-7'>
                <p className='text-base font-medium text-blue-950'>Choose a class</p>
            </div>
            <div className='mt-7'>
                <select  id="" className='outline-none border rounded-lg w-full py-3 px-4 shadow-md'>
                    <option value="">
                       <span className='text-red-400'><GoDotFill /></span> Motor
                    </option>
                </select>
            </div>
            <div className='mt-20 flex justify-center'>
                <CreateRequestBtn/>
            </div>
        </div>
    </div>
  )
}

export default NewInspection