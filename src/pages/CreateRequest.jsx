import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
import { IoCloseOutline } from "react-icons/io5";
import SelectClass from '../components/SelectClass';
import InspectionForm from '../components/InspectionForm';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';


const CreateRequest = () => {
    
        const navigate = useNavigate();
    
        const Redirect = () => {
        navigate('/NewInspection')}
      
  return (
    
    // <div className='lg:ml-56'>
    //     dddddd
    // </div>
    <div className='lg:ml-56 h-full p-4'>
        <Nav title={"Inspections"}/>
        <div className='p-4'>
           <div className='p-8'>
                <div className='flex justify-between'>
                    <div className=''>
                        <p className='text-xl font-semibold text-blue-950'>Create New Inspection</p>
                        <p className='text-sm' >See all inspections across all classes</p>
                    </div>
                    <div className='text-center'>
                        <button onClick={Redirect} className='text-sm text-gray-500'><span className='font-semibold text-xl'>&lt; </span>Back to create request</button>
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