const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoutes');
const blogRouter = require('./routes/blogRoutes');
const tourRouter = require('./routes/tourRoutes');
// const fs = require('fs');
// const path = require('path');

dotenv.config();
const app= express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/blogs' , blogRouter);
app.use('/api/tours', tourRouter);


// const createDirectories = () => {
//   const imageUploadDir = path.join(__dirname, '..', 'uploads', 'images');
//   const videoUploadDir = path.join(__dirname, '..', 'uploads', 'videos');

//   if (!fs.existsSync(imageUploadDir)) {
//     fs.mkdirSync(imageUploadDir, { recursive: true });
//   }

//   if (!fs.existsSync(videoUploadDir)) {
//     fs.mkdirSync(videoUploadDir, { recursive: true });
//   }
// };

// createDirectories();


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