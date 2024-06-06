const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, path.join(__dirname, '..', 'uploads', 'images'));
    } else if (file.mimetype.startsWith('video/')) {
      cb(null, path.join(__dirname, '..', 'uploads', 'videos'));
    } else {
      cb(new Error('Invalid file type'), false);
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });
const uploadFileMiddleware = upload.array('files');

module.exports = uploadFileMiddleware;
