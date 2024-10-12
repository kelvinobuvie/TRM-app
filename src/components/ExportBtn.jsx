import React from 'react'
import { useNavigate } from 'react-router';
import { BiExport } from "react-icons/bi";

const ExportBtn = () => {
  const navigate = useNavigate();

  const Redirect = () => {
  navigate('/CreateReport')
  }
  return (
    <div className=''>
        <button onClick={Redirect} className="bg-gray-400 py-2 px-4 text-white font-bold text-sm">
            <div className='flex items-center gap-2'>
              <BiExport />
              <span>Export</span>
            </div>
        </button>
    </div>
  )
}

export default ExportBtn