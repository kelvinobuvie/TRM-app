import React from 'react'

const DashboardUpdate = () => {
  return (
    <div className='bg-white border border-gray-300 rounded-md shadow-sm  flex flex-col w-full'>
        <div className='flex justify-between px-4 py-4 font-medium'>
            <span >Dashboard Updates</span>
            <span className='text-orange-500'>See all</span>
        </div>
        <div className='flex justify-between mx-4 py-6 border-b-2'>
            <div className='flex'>
            <div className='w-7 h-7'>
                <img src="/notification.png" alt="notification" />
            </div>
            <div className='flex flex-col gap-1 text-xs font-normal'>
                <span>Equilibrium Surveyors uploaded document for<span className='font-medium'>Claim #12323</span></span>
                <span>13h ago</span>
            </div>
            
            </div>
            <div>
                view
            </div>
        </div>
        <div className='flex justify-between mx-4 py-6 border-b-2'>
            <div className='flex gap-2'>
                <div className='w-7 h-7'>
                    <img src="/notification.png" alt="notification" />
                </div>
                <div className='flex flex-col gap-1 text-xs font-normal'>
                    <span>Equilibrium Surveyors uploaded document for<span className='font-medium'>Claim #12323</span></span>
                    <span>13h ago</span>
                </div>
            </div>
            <div>
                view
            </div>
        </div>
        <div className='flex justify-between mx-4 py-6 border-b-2'>
            <div className='flex gap-2'>
                <div className='w-7 h-7'>
                    <img src="/notification.png" alt="notification" />
                </div>
                <div className='flex flex-col gap-1 text-xs font-normal'>
                    <span>Equilibrium Surveyors uploaded document for<span className='font-medium'>Claim #12323</span></span>
                    <span>13h ago</span>
                </div>
            </div>
            <div>
                view
            </div>
        </div>
        <div className='flex justify-between mx-4 py-6 border-b-2'>
            <div className='flex gap-2'>
                <div className='w-7 h-7'>
                    <img src="/notification.png" alt="notification" />
                </div>
                <div className='flex flex-col gap-1 text-xs font-normal'>
                    <span>Equilibrium Surveyors uploaded document for<span className='font-medium'>Claim #12323</span></span>
                    <span>13h ago</span>
                </div>
            </div>
            <div>
                view
            </div>
        </div>
    </div>
  )
}

export default DashboardUpdate