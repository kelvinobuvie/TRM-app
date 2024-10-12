import React from 'react'
// import Input from '../components/Input';
import GeneratePersonnelBtn from './GeneratePersonnelBtn';


const NewPersonnelForm = () => {
  return (
    <div className='mt-12'>
        <form action="">
            <div className="">
                <div className='grid gap-2 mt-2'>
                    <p className='text-xs'>Engineer type</p>
                    <input className='border rounded-sm border-gray-400 py-2 px-4 outline-none lg:w-2/4'
                        placeholder=''   
                    />
                </div>
            </div>
            <div className="clientInformation mt-">
                <div className='grid gap-3 lg:grid-cols-2'>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>First Name</p>
                        <input className='border rounded-sm border-gray-400 py-2 px-4 outline-none lg:w-full'
                            placeholder='123456789'   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Last Name</p>
                        <input className='border rounded-sm border-gray-400 py-2 px-4 outline-none lg:w-full '
                            placeholder='123456789'   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Phone Number</p>
                        <input className='border rounded-sm border-gray-400 py-2 px-4 outline-none lg:w-full '
                            placeholder='123456789'   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Email Address</p>
                        <input className='border rounded-sm border-gray-400 py-2 px-4 outline-none lg:w-full'
                            placeholder='123456789'   
                        />
                    </div>
                </div>
                
            </div>
            <div className="Pernonal Details mt-16">
            <p className='font-semibold text-base - py-2 text-blue-950'>Personal Details</p>
                <div className='grid gap-3 lg:grid-cols-2'>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>House Number </p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full'
                            placeholder=''   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Adress line 1</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full '
                            placeholder=''   
                        />
                    </div>
                    <div className='grid gap-2 mt-8'>
                        <p className='text-xs'>Adress line 2</p>
                        <input className='border rounded-md border-gray-400 py-2 px-4 outline-none lg:w-full '
                            placeholder=''   
                        />
                    </div>
                </div>
            </div>
            <div className="comment mt-16">
                <div className='grid gap-2 mt-8'>
                    <p className='font-semibold text-base py-2 text-blue-950'>Comments</p>
                    <textarea name="" id="" className='border rounded-md border-gray-400 py-2 px-4 outline-none h-44 lg:w-full'>
                    </textarea>
                </div>
            </div>
            <div>
                <div className='grid gap-1 mt-5 lg:flex justify-end'>
                    <div>
                        <GeneratePersonnelBtn/>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NewPersonnelForm