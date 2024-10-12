import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
import InspectionFilters from '../components/InspectionFilters'
import InspectionTabs from '../components/InspectionTabs'
import InspectionList from '../components/InspectionList'
import CreateNewInpectionBtn from '../components/CreateNewInpectionBtn'
import Nav from '../components/Nav'
import CreateReportBtn from '../components/CreateReportbtn'
// import Nav from '../components/Nav'

const Inspections = () => {
  return (
    <div className='lg:ml-56 h-full p-4'>
        <Nav title={"Report"}/>
        <div className='mt-5'>
          <div>
              <p className="text-2xl wel-t text-blue-950 font-bold">Reporting</p>
              <p className="mt-2 text-sm font-normal wel-b">Create Reports from your dashboard data</p>
            </div>
            <div className='mt-5 border h-screen rounded-sm grid justify-center items-center'>
                <div className='grid gap-3'>
                  <div className='flex justify-center'><p>No item available</p></div>
                  <div><CreateReportBtn/></div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Inspections