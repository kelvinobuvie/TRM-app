import React from 'react';
import {Group, Signin} from "../assets/Images"
import Input from '../components/Input';
import { LuUser2 } from 'react-icons/lu';
import { GoLock } from "react-icons/go";
import { GiHelp } from "react-icons/gi";

const Login = () => {
  return (
    <div className='flex w-full bg-orange-400 box-content'>
       <div className="sideA  w-1/2 h-full bg-white pt-10 px-20 pb-24 justify-self-center">
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
       <div className="sideB w-1/2 h-full">
       <div className='flex flex-col justify-between items-center  h-full py-[39px]'>
        	<div className='flex text-white mr-[51px] text-lg text-bold gap-1 self-end'>
              <a href="" className='font-semibold'>
              <GiHelp className='inline-block mr-2 -mt-1'/>
                Help</a>
          </div>
          <div className='loginb flex w-[500px] h-[115px] bg-white rounded-md '>
              <div className='py-[20px] px-5 bg-gray-200'>
                <img className='w-[72px] h-[72px]' src={Group} alt=""/>
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