// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EditList from './components/EditList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import './App.css'; 
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import TasksAvailable from './pages/TasksAvailable'
import EmployeeDetails from './pages/EmployeeDetails';

function App() {
  return (
    <Router>
       <NavBar/>
      <Routes>
        <Route path="/list" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit" element={<EditList />} />
        <Route path="/employee/:id/edit" element={<EditEmployee />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tasksavailable' element={<TasksAvailable/>}/>
        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
