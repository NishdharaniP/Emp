// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EditList from './components/EditList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import NavBar from './components/NavBar';  // Import NavBar
import 'font-awesome/css/font-awesome.min.css';

import Home from './pages/Home';
import About from './pages/About';
import TasksAvailable from './pages/TasksAvailable';
import EmployeeDetails from './pages/EmployeeDetails';
import Signup from './pages/Signup';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  
  const showNavBar = !['/', '/login'].includes(location.pathname.toLowerCase());

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/list" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit" element={<EditList />} />
        <Route path="/employee/:id/edit" element={<EditEmployee />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasksavailable" element={<TasksAvailable />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
