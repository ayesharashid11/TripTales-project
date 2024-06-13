const express = require('express');
const blogController = require('../controllers/blogController');
const uploadFileMiddleware = require('../middleware/imgUploadMiddleware');
// const authenticateUser = require('../middleware/verifyToken');
const router = express.Router();

router.post('/createblogs',  uploadFileMiddleware, blogController.createBlog);
router.get('/getblogs', blogController.getAllBlogs);
router.get('/getoneblog/:id', blogController.getBlog);

module.exports = router;
