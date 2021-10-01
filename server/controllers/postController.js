const router = require('express').Router();
const Post = require('../models/Post');
const { isAuth } = require('../middlewares/auth')


router.get(('/'), (req, res) => {
    Post.find()
        .then(posts => {
            res.json(posts)
        })
});

router.post('/', (req, res) => {
    let post = new Post(req.body);
    console.log(req.body);
    post.save()
        .then(createdMovie => {
            console,log(createdMovie)
            res.status(201).json({ _id: createdMovie._id });
        })
});

router.get(('/:postId'), (req, res) => {
     Post.findById(req.params.postId)
     .then(posts => {
        res.json(posts)
    })
});



module.exports = router;