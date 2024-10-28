import React from 'react';
import { useNavigate } from 'react-router-dom';
// import {Signin} from "../assets/Images"
import Input from '../components/Input';
import { LuUser2 } from 'react-icons/lu';
import { GoLock } from "react-icons/go";
import { GiHelp } from "react-icons/gi";
// import Loginbutton from '../components/Loginbutton';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/overview')
  }


  return (
    <div className='flex w-full box-content justify-center'>
       <div className="sideA1  w-full h-screen bg-white pt-10 px-32 py-24 justify-self-center items-center max-lg:hidden">
            <div className='flex flex-col justify-center items-center py-8'>
                <div className=""> 
                  <img className='' src="/New_Leadway_Logo 1.png" alt="gggg"/>
                </div>
                <div className='mt-5'>
                  <span className='loginTRM text-4xl font-semibold'>TRM Dashboard</span>
                  <p className='text-sm wp mt-2 '>Welcome. Login to your account</p>
                </div>
                <div className="form mt-3">
                <Input
                  type='text'
                  label="Login ID"
                  placeholder="Enter your login ID"
                  icon={<LuUser2/>}
                 />
                 <Input
                  type='password'
                  label="password"
                  placeholder="Enter your password"
                  icon={<GoLock />}
                 />
                </div>
                <div className='reset flex justify-between px-[34px] text-xs w-[400px]'>
                  <a href=''>Keep me logged in</a>
                  <a href=''>Forgort password</a>
                </div>
                <button onClick={handleLogin} className="custom-button w-[400px] mt-9">
                  Login
                </button>
            </div>   
       </div>
       <div className="sideA2 w-full h-screen bg-white pt-10  mb-24 flex-col justify-center items hidden max-lg:block fixed">
            <div className='flex flex-col justify-center items-center'>
                <div> 
                  <img  className ="w-20 h-20" src={"/New_Leadway_Logo 1.png"} alt="ggggg"/>
                </div>
                <div className='mt-2'>
                  <span className='loginTRM text-3xl font-semibold'>TRM Dashboard</span>
                  <p className='text-sm wp mt-2 '>Welcome. Login to your account</p>
                </div>
                <div className="form mt-3">
                <Input
                  type='text'
                  label="Login ID"
                  placeholder="Enter your login ID"
                  icon={<LuUser2/>}
                 />
                 <Input
                  type='password'
                  label="password"
                  placeholder="Enter your password"
                  icon={<GoLock />}
                 />
                </div>
                <div className='reset flex justify-between px-[34px] text-xs w-[400px]'>
                  <a href=''>Keep me logged in</a>
                  <a href=''>Forgort password</a>
                </div>
                <button onClick={handleLogin} className="custom-button w-[400px] mt-9">
                  Login
                </button>
            </div>   
       </div>
       <div className="sideB w-full h-screen max-lg:hidden">
       <div className='flex flex-col justify-between items-center h-full py-[39px]'>
        	<div className='flex text-white mr-[51px] text-lg text-bold gap-1 self-end'>
              <a href="" className='font-semibold'>
              <GiHelp className='inline-block mr-2 -mt-1'/>
                Help</a>
          </div>
          <div className='loginb flex w-[500px] h-[115px] bg-white rounded-md '>
              <div className='py-[20px] px-5 bg-gray-200'>
                <img className='w-[72px] h-[72px]' src={"/Group.png"} alt="ggggg"/>
              </div>
              <div className='py-5 pl-[30px]'>
                <p className='font-bold text-s'>Customer Management</p>
                <p className='mt-3 text-xs'>Manage all customers from individual customers to corporate
                or group customers.</p>
              </div>
            </div>
       </div>
           
       </div>
    </div>
  )
}

export default Login