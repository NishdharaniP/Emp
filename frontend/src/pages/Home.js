// C:\Users\varun\employee-management-app\frontend\src\components\Home.js

import React from 'react';
// Import the NavBar component
import About from './About'; // Import the About component
import TasksAvailable from './TasksAvailable'; // Correctly import the TasksAvailable component from pages

const Home = () => {
  return (
    <div className="home-container">
      
      <About />
      <TasksAvailable />
    </div>
  );
};

export default Home;
