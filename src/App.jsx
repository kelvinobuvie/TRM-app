import React from 'react'
import Sidebar from './components/Sidebar'
// import Main from "./main"
import Overview from './pages/Overview'
import Inspections from './pages/Inspections'
import {BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import "./App.css" 
import Login from './pages/Login'

const App = () => {
  return (
    
       <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<ProtectedLayout />}>
              <Route path='overview' element={<Overview />}/>
              <Route path='inspections' element={<Inspections />}/>
            </Route>

            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>
       </Router>      
  )
}

const ProtectedLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        {/* This is where different pages will be rendered */}
        {/* <Overview/> */}
        <Outlet />
      </div>
    </div>
  );
};


export default App