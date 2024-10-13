import React from 'react'
import { GoDotFill } from 'react-icons/go'

const InspectionSummaryCard = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-md shadow-sm  flex flex-col lg:w-[450px]">
        <div className='vw flex justify-between px-1 p-4 font-medium text-xs'>
            <p className='pl-4'>Total Inspections</p>
            <p className='pr-4'>This Month</p>
        </div>
        <div className='flex justify-center items-center pt-6 pb-14'>
            <img className='h-28 w-28' src="/InspectionSummary.png" alt="Inspection summary" />
        </div>
        <div className='flex justify-around items-center px-16'>
            <div>
            <ul className='mb-3 mt-4 text-sm gap-4'>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-gray-700'>Marine</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-orange-700'></GoDotFill><span className='text-gray-700'>Motor</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-green-700'></GoDotFill><span className='text-gray-700'>Agric</span></a></li>
            </ul>
            </div>
            <div>
            <ul className='mb-3 mt-4 text-sm gap-5'>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-red-700'></GoDotFill><span className='text-gray-700'>Engineering</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-blue-700'></GoDotFill><span className='text-gray-700'>Property</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-yellow-700'></GoDotFill><span className='text-gray-700'>Bond</span></a></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default InspectionSummaryCard