import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Inspections from './pages/Inspections';
import Login from './pages/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path='/login' element={<Login replace/>} />
        
        {/* Protected routes */}
        <Route path='/' element={<ProtectedLayout />}>
          <Route path='overview' element={<Overview />} />
          <Route path='inspections' element={<Inspections />} />
        </Route>
        
        {/* Redirect to login on invalid routes */}
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </Router>
  );
};

const ProtectedLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default App;
