import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
import { IoCloseOutline } from "react-icons/io5";
import { GoDotFill } from 'react-icons/go';
import CreateRequestBtn from '../components/CreateRequestBtn';


const NewInspection = () => {
  return (
    <div className='lg:ml-56 h-full'>
        <header>
            <nav>
            <div > 
                <div className='nav px-4 py-3 mt-6 flex justify-between'>
                <div className='flex items-center text-xl '>
                    <FaBars className=' text-gray-600 me-4 hidden max-lg:block w-6 h-6 mb-3'/>
                    <span className='text-gray-600 font-semibold mb-3'>Inspections</span>
                </div>
                <div className='flex items-center gap-x-5'>
                    <FaRegBell className=' notify w-6 h-6 mb-3'/>
                </div>
                </div>
            </div>
            </nav>
        </header>
        <div className='flex justify-between'>
            <div className='p-4'>
                <p className='text-xl font-semibold text-blue-950'>Create New Inspection</p>
                <p className='text-sm'>See all inspections across all classes</p>
            </div>
            <div className='py-4 px-9 text-center'>
                <a className='text-gray-400 hover:underline' href="/inspections"><IoCloseOutline className='h-12 w-12'/>close</a>
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