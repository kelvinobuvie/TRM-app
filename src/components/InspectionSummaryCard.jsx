import React from 'react'
import { GoDotFill } from 'react-icons/go'

const InspectionSummaryCard = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-md shadow-sm  flex flex-col w-80">
        <div className='vw flex justify-between px-1 text-sm p-4'>
            <p className='pl-4'>Total Inspections</p>
            <p className='pr-4'>This Month</p>
        </div>
        <div className='flex justify-center items-center pt-6 pb-14'>
            <img className='h-28 w-28' src="/InspectionSummary.png" alt="Inspection summary" />
        </div>
        <div className='flex justify-between items-center px-16 gap-4'>
            <div>
            <ul className='mb-3 mt-4 text-sm gap-5'>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-gray-700'>Marine</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-gray-700'>Marine</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-gray-700'>Marine</span></a></li>
            </ul>
            </div>
            <div>
            <ul className='mb-3 mt-4 text-sm gap-5'>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-gray-700'>Marine</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-gray-700'>Marine</span></a></li>
                <li className='mb-2 text-sm'><a href="#"><GoDotFill className='inline-block w-3 h-3 mr-2 -mt-1 text-purple-700'></GoDotFill><span className='text-gray-700'>Marine</span></a></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default InspectionSummaryCard