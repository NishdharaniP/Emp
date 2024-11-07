import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5003/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch(err => console.log(err));
  };

  return (
   
      <div className="card p-4 shadow" style={{ width: '600px' }}>
        <h2 className="text-center text-primary mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
       
            <label htmlFor="email" className="form-label text-dark" style={{ fontSize: '1.4rem' }}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              required
              className="form-control"
              style={{ height: '55px', fontSize: '1.2rem' }}
              onChange={(e) => setEmail(e.target.value)}
            />
         

       
            <label htmlFor="password" className="form-label text-dark" style={{ fontSize: '1.4rem' }}>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              required
              className="form-control"
              style={{ height: '55px', fontSize: '1.2rem' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          
       
          <button type="submit" className="btn btn-primary w-100" style={{ fontSize: '1.3rem',padding:'10px' }}>Submit</button>
        </form>
      </div>
     
   
  );
};

export default Login;



