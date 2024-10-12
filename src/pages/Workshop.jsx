import React from 'react'
// import InspectionSummaryCard from "../components/InspectionSummaryCard"
// import DashboardUpdate from "../components/DashboardUpdate"
import RecentInspections from "../components/RecentInspections"
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
// import PersonnelCards from '../components/PersonnelCards'
// import PersonnelFilter from '../components/PersonnelFilter'
import CreateNewWorkshopBtn from '../components/CreateNewWorkshopBtn'
import WorkshopFilters from '../components/WorkshopFilters'
import WorkshopList from '../components/WorkshopList'

const Workshop = () => {
  return (
      <div className="lg:ml-56 h-full p-4">
        <header>
            <nav>
            <div > 
                <div className='nav mt-6 flex justify-between'>
                <div className='flex items-center text-xl'>
                    <FaBars className=' text-gray-600 me-4 hidden max-lg:block w-6 h-6 mb-3'/>
                    <span className='text-gray-600 font-semibold mb-3'>Workshop</span>
                </div>
                <div className='flex items-center gap-x-5'>
                    <FaRegBell className=' notify w-6 h-6 mb-3'/>
                </div>
                </div>
            </div>
            </nav>
        </header>
        <div className="mt-5">
          <div className="grid gap-2 lg:flex justify-between">
            <div>
              <p className="text-2xl wel-t text-blue-950 font-bold">Workshop Management</p>
              <p className="mt-2 text-sm font-normal wel-b">Manage all activities with parthnered workshops</p>
            </div>
            <div className="">
              <CreateNewWorkshopBtn/>
            </div>
          </div>
          <div>
            <WorkshopFilters/>
          </div>
         <div className='flex justify-end'>
          <div className='border text-xs flex items-end border-gray-300 rounded-md px-2 py-1 outline-none'>
            <select name="" id="" className='outline-none'>
                <option value="" className=''>Sort by: <span className='font-semibold'>Class</span></option>
            </select>
          </div>
         </div>
          <div className="mt-3">
            <WorkshopList/>
          </div>
        </div>
        
    </div>
  )
}

export default Workshop