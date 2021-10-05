const router = require('express').Router();
const Post = require('../models/Post');
const { isAuth } = require('../middlewares/auth');

router.get(('/'), (req, res) => {
    Post.find()
        .then(posts => {
            res.json(posts)
        })
});

router.post('/',(req, res) => {
    let post = new Post(req.body);

    post.save()
        .then(createdPost => {
            res.status(201).json({ _id: createdPost._id });
        })
});

router.get(('/:postId'), (req, res) => {
    Post.findById(req.params.postId)
        .then(post => {
            res.json(post)
        })
});

router.get(('/userId=:id'),(req, res) => {
    Post.find({userId:req.params.id})
        .then(posts => {
            console.log(posts)
            res.json(posts)
        })
});

module.exports = router;