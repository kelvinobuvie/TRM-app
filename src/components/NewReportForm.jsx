import React from 'react'

const NewReportForm = () => {
  return (
    <div className='grid gap-3 lg:flex w-full'>
        <div className='border-l-2 border-b-2 border-r shadow-md px-8 pt-8 pb-4 w-[50%] lg:h-screen'>
            <div className=''>
                <p className='font-bold text-blue-950 text-sm'>Select a category</p>
                <div className='border text-xs mt-3 border-gray-300 rounded-lg p-2 outline-none'>
                    <select className='outline-none' name="" id="">
                        <option value="">Post-loss-inspection</option>
                    </select>
                </div>
                <div className='mt-3 grid gap-3 text-xs'>
                    <input type="date" id="Date-inpute" placeholder='Date from' className="border border-gray-300 rounded-lg p-2" />
                    <input type="date" placeholder='Date To' className="border border-gray-300 rounded-lg p-2" />
                </div>
                <div className='mt-10 gap-3 text-xs'>
                    <p className='mt-9 font-bold text-blue-950 text-sm'>Report Criteria</p>
                    <div className='py-2 flex gap-4'>
                        <input type="checkbox"/><span className='text-gray-400'>Total number of active Workershops</span>
                    </div>
                    <div className='py-2 flex gap-3'>
                        <input type="checkbox"/><span className='text-gray-400'>Total number of workshops</span>
                    </div>
                    <div className='py-2 flex gap-3'>
                        <input type="checkbox"/><span className='text-gray-400'>Total number of workshops</span>
                    </div>
                    <div className='py-2 flex gap-3'>
                        <input type="checkbox"/><span className='text-gray-400'>Total number of workshops</span>
                    </div>
                    <div className='py-2 flex gap-3'>
                        <input type="checkbox"/><span className='text-gray-400'>Total number of workshops</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-l-2 border-b-2 border-r shadow-md px-4 pt-8 pb-4 w-full h-screen'>
            
        </div>
    </div>
  )
}

export default NewReportForm