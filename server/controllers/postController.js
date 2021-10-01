const router = require('express').Router();
const Post = require('../models/Post');
const { isAuth } = require('../middlewares/auth')


router.get(('/'), (req, res) => {
    Post.find()
        .then(posts => {
            res.json(posts)
        })


})

router.post('/', (req, res) => {
    let post = new Post(req.body);
    console.log(req.body);
    post.save()
        .then(createdMovie => {
            res.status(201).json({ _id: createdMovie._id });
        })
});


module.exports = router;