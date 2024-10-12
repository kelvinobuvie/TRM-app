import React from 'react'
import { useNavigate } from 'react-router';

const CreateReportBtn = () => {
  const navigate = useNavigate();

  const Redirect = () => {
  navigate('/CreateReport')
  }
  return (
    <div>
        <button onClick={Redirect} className="bg-orange-500 py-2 px-8 text-white font-bold text-xs">
            Create Report
        </button>
    </div>
  )
}

export default CreateReportBtn