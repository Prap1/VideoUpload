const express = require('express');
const VideoController = require('../controllers/VideoController');

const router = express.Router();

router.post('/', VideoController.upload.single('video'), VideoController.uploadVideo);
router.get('/:filename', VideoController.streamVideo);
router.get('/download/:filename', VideoController.downloadVideo);

module.exports = router;
