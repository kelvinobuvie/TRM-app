import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
import { IoCloseOutline } from "react-icons/io5";
import SelectClass from '../components/SelectClass';
import InspectionForm from '../components/InspectionForm';

const CreateRequest = () => {
  return (
    // <div className='lg:ml-56'>
    //     dddddd
    // </div>
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
        <div className='p-4'>
           <div className='p-8'>
                <div className='flex justify-between'>
                    <div className=''>
                        <p className='text-xl font-semibold text-blue-950'>Create New Inspection</p>
                        <p className='text-sm'>See all inspections across all classes</p>
                    </div>
                    <div className='text-center'>
                        <a href="/NewInspection" className='text-sm text-gray-500'><span className='font-semibold text-xl'>&lt; </span>Back to create request</a>
                    </div>
                </div>
                <div className='mt-9 p-8 border-t border-r rounded-md h-screen overflow-y-auto'>
                    <div>
                        <p className='font-semibold text-lg text-blue-950 pb-4 border-b'>Pre-Loss Link Generation - Motors</p>
                    </div>
                    <div className='mt-7'>
                        <p className='text-base'>Select inspection class <span className='text-xs'>(Choose class of inspection)</span></p>
                    </div>
                    <div>
                        <SelectClass/>
                    </div>
                    <div>
                        <InspectionForm/>
                    </div>
                </div>
            </div>      
        </div>
        
    </div>
  )
}

export default CreateRequest