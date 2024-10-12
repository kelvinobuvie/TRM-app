import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
import InspectionFilters from '../components/InspectionFilters'
import InspectionTabs from '../components/InspectionTabs'
import InspectionList from '../components/InspectionList'
import CreateNewInpectionBtn from '../components/CreateNewInpectionBtn'
// import Nav from '../components/Nav'

const Inspections = () => {
  return (
    <div className='lg:ml-56 h-full p-4'>
        <header>
            <nav className=''>
            <div className=''> 
                <div className='nav mt-6 flex justify-between'>
                <div className='flex items-center text-xl'>
                    <FaBars className=' text-gray-600 me-4 hidden max-lg:block w-6 h-6 mb-3'/>
                    <span className='text-gray-600 font-semibold mb-3'>Reports</span>
                </div>
                <div className='flex items-center gap-x-5'>
                    <FaRegBell className=' notify w-6 h-6 mb-3'/>
                </div>
                </div>
            </div>
            </nav>
        </header>
        <div className='mt-5'>
          <div>
              <p className="text-2xl wel-t text-blue-950 font-bold">Reporting</p>
              <p className="mt-2 text-sm font-normal wel-b">Create Reports from your dashboard data</p>
            </div>
            <div className='mt-5 border h-screen rounded-sm grid justify-center items-center'>
                <div className='grid gap-3'>
                  <div className='flex justify-center'><p>No item available</p></div>
                  <div><CreateNewInpectionBtn/></div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Inspections