const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoutes');
const blogRouter = require('./routes/blogRoutes');
const tourRouter = require('./routes/tourRoutes');
const reviewrouter = require('./routes/reviewRoutes');
const paymentRoutes = require('./payment-integration/jazzcashRoute');
const  placesController = require('./controllers/placesController');
const geocoderRoutes = require('./routes/geocoder');
const fourSquareApi = require ('./controllers/fourSquareApi');
const cors = require('cors');
const path = require ('path');
// const fs = require('fs');
// const path = require('path');

dotenv.config();
const app= express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads', 'images')));
app.use('/api/auth', authRouter);
app.use('/api/blogs' , blogRouter);
app.use('/api/tours', tourRouter);
app.use('/api/review', reviewrouter);
app.use('/api/payment', paymentRoutes);
app.use('/api', placesController);
app.use('/api',  geocoderRoutes );
app.use('/api',  fourSquareApi);
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