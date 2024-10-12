import React from 'react'
import { useNavigate } from 'react-router';

const GeneratePersonnelBtn = () => {
  const navigate = useNavigate();

  const Redirect = () => {
  navigate('/Personnel')
  }
  return (
    <div className=''>
        <button onClick={Redirect} className="bg-orange-500 py-2 px-8 text-white font-bold text-xs">
            Genate
        </button>
    </div>
  )
}

export default GeneratePersonnelBtn