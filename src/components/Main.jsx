import React from 'react'
import Nav from './Nav'
import Overview from "../pages/Overview"


const Main = () => {
  return (
    <div className='w-full h-[100vh]'>
        <Nav />
        <Overview/>
    </div>
  )
}

export default Main