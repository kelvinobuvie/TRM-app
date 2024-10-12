import React from 'react'
import { useNavigate } from 'react-router';

const GenerateBtn = () => {
  const navigate = useNavigate();
        const Redirect = () => {
        navigate('/NewInspection')
    }
  return (
    <div>
        <button onClick={Redirect} className="bg-orange-500 py-2 px-8 text-white font-bold text-xs">
            Generate
        </button>
    </div>
  )
}

export default GenerateBtn