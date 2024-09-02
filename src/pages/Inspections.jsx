import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaRegBell } from 'react-icons/fa6'
// import Nav from '../components/Nav'

const Inspections = () => {
  return (
    <div>
        <header>
            <nav>
            <div > 
                <div className='nav px-4 py-3 mt-6 flex justify-between'>
                <div className='flex items-center text-xl '>
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
    </div>
  )
}

export default Inspections