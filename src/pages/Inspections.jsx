import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
import InspectionFilters from '../components/InspectionFilters'
import InspectionTabs from '../components/InspectionTabs'
import InspectionList from '../components/InspectionList'
// import Nav from '../components/Nav'

const Inspections = () => {
  return (
    <div className='lg:ml-56 h-full'>
        <header>
            <nav>
            <div > 
                <div className='nav px-4 py-3 mt-6 flex justify-between'>
                <div className='flex items-center text-xl'>
                    <FaBars className=' text-gray-600 me-4 hidden max-lg:block w-6 h-6 mb-3'/>
                    <span className='text-gray-600 font-semibold mb-3'>Inspections</span>
                </div>
                <div className='flex items-center gap-x-5'>
                    <FaRegBell className=' notify w-6 h-6 mb-3'/>
                </div>
                </div>
            </div>
            </nav>
        </header>
        <div>
            <InspectionFilters/>
            <InspectionTabs/>
            <InspectionList/>
        </div>
    </div>
  )
}

export default Inspections