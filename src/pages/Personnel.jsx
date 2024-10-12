import React from 'react'
// import InspectionSummaryCard from "../components/InspectionSummaryCard"
// import DashboardUpdate from "../components/DashboardUpdate"
import RecentInspections from "../components/RecentInspections"
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
import CreateNewPersonnelBtn from '../components/CreateNewPersonnelBtn'
import PersonnelCards from '../components/PersonnelCards'
import PersonnelFilter from '../components/PersonnelFilter'

const Personnel = () => {
  return (
      <div className="lg:ml-56 h-full p-4">
        <header>
            <nav>
            <div > 
                <div className='nav mt-6 flex justify-between'>
                <div className='flex items-center text-xl'>
                    <FaBars className=' text-gray-600 me-4 hidden max-lg:block w-6 h-6 mb-3'/>
                    <span className='text-gray-600 font-semibold mb-3'>Personnel</span>
                </div>
                <div className='flex items-center gap-x-5'>
                    <FaRegBell className=' notify w-6 h-6 mb-3'/>
                </div>
                </div>
            </div>
            </nav>
        </header>
        <div className="mt-5">
          <div className="grid lg:flex justify-between">
            <div>
              <p className="text-2xl wel-t text-blue-950 font-bold">Personnel Page</p>
              <p className="mt-2 text-sm font-normal wel-b">see all staffs and their ongoing duties</p>
            </div>
            <div className="mt-6">
              <CreateNewPersonnelBtn/>
            </div>
          </div>
          <div>
            <PersonnelCards/>
          </div>
          <div>
            <PersonnelFilter/>
          </div>
          <div className="mt-3">
            <RecentInspections/>
          </div>
        </div>
        
    </div>
  )
}

export default Personnel