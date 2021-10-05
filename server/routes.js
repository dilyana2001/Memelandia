const router = require('express').Router();

const authController = require('./controllers/authController');
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController');
const profileController = require('./controllers/profileController');


router.use('/auth', authController);
router.use('/posts', postController);
router.use('/comments', commentController);
router.use('/profile', profileController);



module.exports = router;