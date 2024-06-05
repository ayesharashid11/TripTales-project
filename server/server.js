const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoutes');
dotenv.config();
const app= express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRouter);

const connectDb = async () => {
    mongoose.connect(process.env.MONGODB_CLOUD, )
       .then(() => {
         console.log(`Connection successful to ${mongoose.connection.host}`);
       })
       .catch(err => {
         console.error(`Error connecting to database: ${err.message}`);
       });
   };
   connectDb();

const port = process.env.PORT || 8000;
app.listen (port , ()=> {
    console.log(`Server is running on ${port} !`);
})