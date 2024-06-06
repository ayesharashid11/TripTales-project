const express = require('express');
const blogController = require('../controllers/blogController');
const uploadFileMiddleware =require ('../middleware/imgUploadMiddleware');
const router = express.Router();

router.post('/createblogs', uploadFileMiddleware,blogController.createBlog);
// router.get('/getblogs', blogController.getblogs);
module.exports = router;
