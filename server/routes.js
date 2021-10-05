const router = require('express').Router();
const authController = require('./controllers/authController');
const postController = require('./controllers/postController');
// const profileController = require('./controllers/profileController');


router.use('/auth', authController);
router.use('/posts', postController);
// router.use('/profile-edit', profileController);



module.exports = router;