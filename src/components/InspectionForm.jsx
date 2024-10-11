import React from 'react'
import Input from '../components/Input';
import GenerateBtn from './GenerateBtn';


const InspectionForm = () => {
  return (
    <div className='mt-16'>
        <form action="">
            <div className="policyInfomation">
                <p className='font-semibold text-base border-b-2 py-2 text-blue-950'>Policy information</p>
                <div className='grid gap-2 mt-8'>
                    <p className='text-xs'>Policy Number(Optional)</p>
                    <input className='border rounded-md border-gray-400 py-2 px-4 outline-none w-2/4'
                        placeholder='123456789'   
                    />
                </div>
            </div>
            <div className="clientInformation mt-16">
            <p className='font-semibold text-base border-b-2 py-2 text-blue-950'>Client Information</p>
                <div className='grid gap-3 lg:grid-cols-2'>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Client First Name</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full w-2/4'
                            placeholder='123456789'   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Client Last Name</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full w-2/4'
                            placeholder='123456789'   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Client Phone Number</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full w-2/4'
                            placeholder='123456789'   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Client Email Address</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full w-2/4'
                            placeholder='123456789'   
                        />
                    </div>
                </div>
                
            </div>
            <div className="vehicleInformation mt-16">
            <p className='font-semibold text-base border-b-2 py-2 text-blue-950'>Vehicle Information</p>
                <div className='grid gap-3 lg:grid-cols-2'>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Vehicle Name</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full w-2/4'
                            placeholder='123456789'   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Vehicle Model</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full w-2/4'
                            placeholder='123456789'   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Regrisration Number</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full w-2/4'
                            placeholder='123456789'   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Year</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full w-2/4'
                            placeholder='123456789'   
                        />
                    </div>
                </div>
            </div>
            <div className="comment mt-16">
                <div className='grid gap-2 mt-8'>
                    <p className='font-semibold text-base border-t-2 py-2 text-blue-950'>Comments</p>
                    <textarea name="" id="" className='border rounded-md border-gray-400 py-2 px-4 outline-none h-44 lg:w-full'>
                    </textarea>
                </div>
            </div>
            <div>
                <div className='grid gap-1 mt-5 lg:flex justify-between'>
                    <div className='text-orange-500 font-semibold text-sm'>+ Attach document</div>
                    <div>
                        <GenerateBtn/>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default InspectionForm