import React from 'react'
import { CiSearch } from "react-icons/ci";

const InspectionFilters = () => {
  return (
    <div className='p-4 flex flex-wrap gap-1 text-xs lg:text-sm'>
        <div className='flex border border-gray-300 rounded-lg p-2 gap-2 w-[295px]'>
            <CiSearch className='w-4 h-5 mt-1 text-gray-500' />
            <input type="text" className='outline-none w-[295px]'
                placeholder='Search claims id, personnel, enrollee'
            />
        </div>
        <div className='border border-gray-300 rounded-lg p-2 outline-none'>
            <select name="" id="" className='outline-none'>
                <option value="">Post-loss inspections</option>
                <option value="">Pre-loss inspctions</option>
            </select>
        </div>
        <div className='border border-gray-300 rounded-lg p-2 outline-none'>
            <select name="" id="" className='outline-none'>
                <option value="">Inspection Class</option>
            </select>
        </div>
        <div className='border border-gray-300 rounded-lg p-2 outline-none'>
            <select name="" id="" className='outline-none'>
                <option value="">Status</option>
            </select>
        </div>
        <input type="date" id="Date-inpute" placeholder='Date from' className="border border-gray-300 rounded-lg p-2" />
        <input type="date" placeholder='Date To' className="border border-gray-300 rounded-lg p-2" />
    </div>
  )
}

export default InspectionFilters