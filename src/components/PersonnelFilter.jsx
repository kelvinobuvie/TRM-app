import React from 'react'
// import { CiSearch } from "react-icons/ci";

const PersonnelFilter = () => {
  return (
    <div className='grid gap-1 lg:flex justify-between text-xs lg:text-sm mt-10'>
        <div className='flex border border-gray-300 rounded-sm px-2 py-1 gap-1 w-52'>
            <input type="text" className='outline-none w-[295px]'
                placeholder='Search'
            />
        </div>
            <div className='border border-gray-300 rounded-md px-2 py-1 outline-none'>
                <select name="" id="" className='outline-none'>
                    <option value="">Sort by: <span className='font-semibold'>Class</span></option>
                </select>
            </div>
    </div>
  )
}

export default PersonnelFilter