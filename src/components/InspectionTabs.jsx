import React from 'react'

const InspectionTabs = () => {
  return (
    <div className='p-4  my-4 flex justify-between'>
        <div className='flex gap-6'>
            <button className="text-sm active:border-b-2 tabbtn hover:border-orange-500 active:border-orange-500">All <span className="bg-gray-300 border border-gray-300 rounded-md shadow-sm px-1 text-xs active:bg-orange-300 active:text-orange-500">934</span></button>
            <button className='text-sm'>Ongoing Inspections <span className="bg-gray-300 border border-gray-300 rounded-md shadow-sm px-1 text-xs">35</span></button>
            <button className='text-sm'>Inspection requests <span className="bg-gray-300 border border-gray-300 rounded-md shadow-sm px-1 text-xs">35</span></button>
            <button className='text-sm'>AI scan links <span className="bg-gray-300 border border-gray-300 rounded-md shadow-sm px-1 text-xs">120</span></button>
        </div>
        <div>
        <button className="bg-orange-500 py-2 px-8 text-white font-bold text-xs">
                + Create New Inspection
              </button>
        </div>
    </div>
  )
}

export default InspectionTabs