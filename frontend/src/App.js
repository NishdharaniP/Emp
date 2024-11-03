import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
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
        <Route path="/edit/:id" element={<EditEmployee />} />
        
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/tasksavailable' element={<TasksAvailable/>}/>
        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
/*


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import TasksAvailable from './pages/TasksAvailable';
import EmployeeDetails from './pages/EmployeeDetails';
import Login from './components/Login';
import Register from './components/Register';
import EmployeeDashboard from './components/EmployeeDashboard'; // Placeholder for employee dashboard
import AdminDashboard from './components/AdminDashboard'; // Placeholder for admin dashboard

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasksavailable" element={<TasksAvailable />} />
        <Route path="/list" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


*/
