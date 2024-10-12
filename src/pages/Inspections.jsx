import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
import InspectionFilters from '../components/InspectionFilters'
import InspectionTabs from '../components/InspectionTabs'
import InspectionList from '../components/InspectionList'
import Nav from '../components/Nav'
// import Nav from '../components/Nav'

const Inspections = () => {
  return (
    <div className='lg:ml-56 h-full p-4'>
        <Nav title={"Inspections"}/>
        <div>
            <InspectionFilters/>
            <InspectionTabs/>
            <InspectionList/>
        </div>
    </div>
  )
}

export default Inspections