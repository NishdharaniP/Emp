import React from 'react';
import '../styles/TasksAvailable.css';

const TasksAvailable = () => {
  const departments = [
    {
      name: 'Research and Development',
      tasks: [
        'Develop new security technologies',
        'Conduct market research',
        'Improve existing product features',
      ],
      employeesAssigned: 30,
    },
    {
      name: 'Customer Support',
      tasks: [
        'Respond to customer inquiries',
        'Assist with product issues',
        'Gather customer feedback',
      ],
      employeesAssigned: 20,
    },
    {
      name: 'Sales and Marketing',
      tasks: [
        'Create marketing campaigns',
        'Develop sales strategies',
        'Manage client relationships',
      ],
      employeesAssigned: 25,
    },
    {
      name: 'Human Resources',
      tasks: [
        'Recruit new employees',
        'Manage employee records',
        'Conduct training sessions',
      ],
      employeesAssigned: 15,
    },
    {
      name: 'IT Services',
      tasks: [
        'Maintain IT infrastructure',
        'Provide tech support',
        'Ensure system security',
      ],
      employeesAssigned: 25,
    },
  ];

  return (
    <div className="tasks-container">
      <h1 className="tasks-title">Available Tasks</h1>
      <div className="departments-container">
        {departments.map((department, index) => (
          <div className="department-card" key={index}>
            <h3>{department.name}</h3>
            <h4>Employees Assigned: {department.employeesAssigned}</h4>
            <ul className="tasks-list">
              {department.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksAvailable;
