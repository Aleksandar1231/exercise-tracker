 //get express framework
 const express = require('express');
 //get cors framework
 const cors = require('cors');
 //get mongoose framework
 const mongoose = require('mongoose');

 //dotenv framework, save env vars in file
 require('dotenv').config(); 

 //create express server 
 const app = express();
 //assign port
 const port = process.env.PORT || 5000;

 //cors middleware
 app.use(cors()); 

 //parse json since server is sending and receive json
 app.use(express.json());

 //mongoDB connection string uri
 const uri = process.env.ATLAS_URI;

 //pass in uri where db is stored
 //flags: parse mongoDB connection strings, deal with mongoDB deprecation
 mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

 const connection = mongoose.connection;

 //start mongo server
 connection.once('open', () => {
     console.log('MongoDB database connection established successfully');
 })


 const exercisesRouter = require('./routes/exercises');
 const usersRouter = require('./routes/users');

 //load the imported files when user accesses the following suffixes in the url
 app.use('/exercises', exercisesRouter);
 app.use('/users', usersRouter);

 //start server on port
 //start server by typin in cmd: nodemon server
 app.listen(port, () => {
     console.log(`Server is running on port: ${port}`);
 });  