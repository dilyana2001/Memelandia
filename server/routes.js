const router = require('express').Router();
const authController = require('./controllers/authController');
const postController = require('./controllers/postController');

router.use('/auth', authController);
router.use('/posts', postController)


module.exports = router;