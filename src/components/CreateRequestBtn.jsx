import React from 'react'
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';


const CreateRequestBtn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
  navigate('/CreateRequest')

  }
  return (
    <div>
        <button onClick={handleLogin} className="bg-orange-500 py-3 px-8 text-white font-bold text-xs flex">
         <LiaArrowCircleRightSolid className='h-4 w-4 mr-1'/>Create Request
        </button>
    </div>
  )
}

export default CreateRequestBtn