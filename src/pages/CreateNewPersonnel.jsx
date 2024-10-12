
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import NewPersonnelForm from '../components/NewPersonnelForm';


const CreateNewPersonnel = () => {
    
        const navigate = useNavigate();
    
        const Redirect = () => {
        navigate('/personnel')}
      
  return (
    
    // <div className='lg:ml-56'>
    //     dddddd
    // </div>
    <div className='lg:ml-56 h-full p-4'>
        <Nav title={"Personnel"}/>
        <div className='p-4'>
           <div className='p-8'>
                <div className='flex justify-between'>
                    <div className=''>
                        <p className='text-xl font-semibold text-blue-950'>Create New Personnel</p>
                        <p className='text-sm' >Update your staff info and personal data here</p>
                    </div>
                    <div className='text-center'>
                        <button onClick={Redirect} className='text-sm text-gray-500'><span className='font-semibold text-xl'>&lt; </span>Back to personnel page</button>
                    </div>
                </div>
                <div className='mt-9 p-8 border-t border-r rounded-md h-screen overflow-y-auto'>
                    <div>
                        <p className='font-semibold text-lg text-blue-950 pb-4 border-b'>Fill in details</p>
                    </div>
                    <div>
                        <NewPersonnelForm/>
                    </div>
                </div>
            </div>      
        </div>
        
    </div>
  )
}

export default CreateNewPersonnel