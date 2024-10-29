import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const DashboardDisplay = () => navigate('/dashboard');
  const AboutDisplay = () => navigate('/about');
  const TasksDisplay = () => navigate('/tasksavailable');
  const SummaryDisplay = () => navigate('/summary');
  const CollaboratesDisplay = () => navigate('/collaborates');
  const AddEmployeeDisplay = () => navigate('/add');
  const EditDisplay = () => navigate('/edit/:id');
  const EmployeeListDisplay = () => navigate('/list');

  return (
    <div className="container flex items-center justify-between h-16 px-4 mx-auto bg-black sm:px-6 lg:px-8">
      <div className="flex items-center">
        <div className="ml-2 text-lg font-bold text-white">StaffSync</div>
      </div>
      <div className="flex-row items-center gap-8 p-2 text-lg font-medium md:flex">
        <div className="flex">
          <div className="p-2 mr-2 text-black bg-white rounded-lg">
            <button onClick={DashboardDisplay}>Dashboard</button>
          </div>
          <div className="p-2 mr-2 text-black bg-white rounded-lg">
            <button onClick={AboutDisplay}>About</button>
          </div>
          <div className="p-2 mr-2 text-black bg-white rounded-lg">
            <button onClick={TasksDisplay}>Tasks Available</button>
          </div>
          <div className="p-2 mr-2 text-black bg-white rounded-lg">
            <button onClick={SummaryDisplay}>Summary</button>
          </div>
          <div className="p-2 text-black bg-white rounded-lg">
            <button onClick={CollaboratesDisplay}>Collaborates</button>
          </div>
          <div className="p-2 text-black bg-white rounded-lg">
            <button onClick={AddEmployeeDisplay}>Add Employee</button>
          </div>
          <div className="p-2 text-black bg-white rounded-lg">
            <button onClick={EditDisplay}>Edit Employee</button>
          </div>
          <div className="p-2 text-black bg-white rounded-lg">
            <button onClick={EmployeeListDisplay}>Employee List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
