// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const employeeRoutes = require('./routes/employeeRoutes');
const detailsModel = require('./models/User')
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.post('/login',(req,res)=>
      {
          const {email,password}=req.body
          detailsModel.findOne({email:email})
          .then(user =>
          {
              if(user)
              {
                  if(user.password== password)
                  {
                      res.json("Success")
                  }
                  else
                  {
                      res.json("Incorrect")
                  }
              }
              else
              {
                  res.json("no record")
              }
          })
      })
  app.post('/register',(req,res)=>
  {
      detailsModel.create(req.body)
      .then(details => res.json(details))
      .catch(err => res.json(err))
  })
  
app.use('/api/employees', employeeRoutes);

// Start the server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
