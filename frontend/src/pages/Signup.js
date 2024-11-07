import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5003/register', { name, email, country, phone, password })
      .then((result) => {
        console.log(result);
        navigate('/Login');
      })
      .catch((err) => console.log(err));
  };

  return (
   
      <div className="card p-5 shadow-lg" style={{ width: '700px' }}>
        <h2 className="text-center text-success mb-4">Registration Form</h2>
        <form onSubmit={handleSubmit}>
        
            <label htmlFor="name" className="form-label" style={{ fontSize: '1.4rem' }}>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              required
              className="form-control"
              style={{ height: '55px', fontSize: '1.2rem' }}
              onChange={(e) => setName(e.target.value)}
            />
       
          
        
            <label htmlFor="email" className="form-label" style={{ fontSize: '1.4rem' }}>Email Address</label>
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
        

    
            <label htmlFor="country" className="form-label" style={{ fontSize: '1.4rem' }}>Country</label>
            <input
              type="text"
              id="country"
              placeholder="Enter your country"
              name="country"
              required
              className="form-control"
              style={{ height: '55px', fontSize: '1.2rem' }}
              onChange={(e) => setCountry(e.target.value)}
            />
        

         
            <label htmlFor="phone" className="form-label" style={{ fontSize: '1.4rem' }}>Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              name="phone"
              required
              className="form-control"
              style={{ height: '55px', fontSize: '1.2rem' }}
              onChange={(e) => setPhone(e.target.value)}
            />
       

         
            <label htmlFor="password" className="form-label" style={{ fontSize: '1.4rem' }}>Password</label>
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
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label htmlFor="terms" className="form-check-label" style={{ fontSize: '1.3rem' }}>
              I agree to the terms and conditions
            </label>

          <button type="submit" className="btn btn-success w-100" style={{ fontSize: '1.3rem' }}>Create Account</button>
        </form>

        <div className="text-center mt-3">
          <p className="mb-1" style={{ fontSize: '1.3rem' }}>Already have an account?</p>
          <Link to="/Login" className="text-success fw-bold" style={{ fontSize: '1.3rem' }}>Sign in</Link>
        </div>
      </div>
   
  );
};

export default Signup;
