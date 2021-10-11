const router = require('express').Router();

const authController = require('./controllers/authController');
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController');
const profileController = require('./controllers/profileController');
const messageController = require('./controllers/messageController');

router.use('/auth', authController);
router.use('/profiles', profileController);
router.use('/posts', postController);
router.use('/comments', commentController);
router.use('/messages', messageController);


module.exports = router;