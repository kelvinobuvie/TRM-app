import React from 'react'
import { useNavigate } from 'react-router';

const CreateNewPersonnelBtn = () => {
  const navigate = useNavigate();

  const Redirect = () => {
  navigate('/CreatePersonnel')
  }
  return (
    <div>
        <button onClick={Redirect} className="bg-orange-500 py-2 px-8 text-white font-bold text-xs">
            Create Personnel
        </button>
    </div>
  )
}

export default CreateNewPersonnelBtn