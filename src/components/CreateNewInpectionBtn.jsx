import React from 'react'
import { useNavigate } from 'react-router-dom';

const CreateNewInpectionBtn = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
    navigate('/NewInspection')
  }

  return (
    <button onClick={handleLogin} className="bg-orange-500 py-2 px-8 text-white font-bold text-xs">
        + Create New Inspection
    </button>
  )
}

export default CreateNewInpectionBtn