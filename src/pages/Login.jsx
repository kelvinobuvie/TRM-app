import React from 'react';
import {Signin} from "../assets/Images"
import Input from '../components/Input';
import { LuUser2 } from 'react-icons/lu';
import { GoLock } from "react-icons/go";

const Login = () => {
  return (
    <div className='flex w-full'>
       <div className="sideA w-1/2 h-[100vh] bg-white pt-10 px-20 pb-24 justify-self-center">
            <div className=''>
                <div> 
                  <img src={Signin} alt="ndnddj w-3 h-3"/>
                </div>
                <div className='mt-[70px]'>
                  <span className='loginTRM text-4xl font-semibold'>TRM Dashboard</span>
                  <p className=' wp mt-2 '>Welcome. Login to your account</p>
                </div>
                <div className="form mt-[80px]">
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
                <div className='reset flex justify-between px-[34px] text-xs w-[478px]'>
                  <a href=''>Keep me logged in</a>
                  <a href=''>Forgort password</a>
            </div>
            </div>
           
       </div>
       <div className="sideB w-1/2 h-[100vh]">
            
       </div>
    </div>
  )
}

export default Login