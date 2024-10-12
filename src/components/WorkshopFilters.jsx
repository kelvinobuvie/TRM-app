import React from 'react'
// import { CiSearch } from "react-icons/ci";

const WorkshopFilters = () => {
  return (
        <div className='mt-10'>
            <div className='flex gap-1 justify-center rounded-md bg-gray-100 py-1 w-[400px] text-xs'>
                <a href='#' className='px-2 rounded-md hover:bg-white font-medium'>Workshop</a>
                <a href='#' className='px-2 rounded-md hover:bg-white font-medium'>Sent quotes</a>
                <a href='#' className='px-2 rounded-md hover:bg-white font-medium'>Recieved quotes</a>
                <a href='#' className='px-2 rounded-md hover:bg-white font-medium'>Signed Documents</a>
            </div>
        </div>
  )
}

export default WorkshopFilters