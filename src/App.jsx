import React from 'react'
// import Sidebar from './components/Sidebar'
// import Main from "./main"
// import Overview from './pages/Overview'
// import Inspections from './pages/Inspections'
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import "./App.css" 
import Login from './pages/Login'

const App = () => {
  return (
    
       <Router>
        <div className="app flex">
            <Login/>
            {/* <Sidebar/>
            <div className="content w-full h-[100vh]">
                <Routes>
                <Route path="/" element={<Overview/>}/>
                <Route path="/Inspections" element={<Inspections/>}/>
                <Route path="/Login" element={<Login/>}/>
                </Routes>
            </div> */}
        </div>
       </Router>   
      
  )
}

export default App