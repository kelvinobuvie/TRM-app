
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import NewPersonnelForm from '../components/NewPersonnelForm';
import NewReportForm from '../components/NewReportForm';
import ExportBtn from '../components/ExportBtn';


const CreateNewPersonnel = () => {
    
        const navigate = useNavigate();
    
        const Redirect = () => {
        navigate('/Report')}
      
  return (
    
    // <div className='lg:ml-56'>
    //     dddddd
    // </div>
    <div className='lg:ml-56 h-full p-4'>
        <Nav title={"Report"}/>
        <div className=''>
           <div className=''>
                <div className='flex justify-between'>
                    <div className='mt-6'>
                        <p className='text-xl font-semibold text-blue-950'>Create a new report</p>
                        <p className='text-sm' >Create report from your dashboard data</p>
                    </div>
                    <div className='text-center'>
                        <button onClick={Redirect} className='text-sm text-gray-500'><span className='font-semibold text-xl'>&lt; </span>Back to report page</button>
                    </div>
                </div>
                <div className='mt-6 flex justify-end'>
                    <ExportBtn/>
                </div>
                <div className='mt-6'>
                    <div>
                        <NewReportForm/>
                    </div>
                </div>
            </div>      
        </div>
        
    </div>
  )
}

export default CreateNewPersonnel