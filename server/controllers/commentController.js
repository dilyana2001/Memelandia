const router = require('express').Router();
const Comment = require('../models/Comment');
const { isAuth } = require('../middlewares/auth');

router.get('/postId/:id', (req, res) => {
    Comment.find({ postId: req.params.id })
        .then(comment => res.json(comment))
});

router.post('/', (req, res) => {
    let comment = new Comment(req.body);
    comment.save()
        .then(createComment => res.status(201).json({ _id: createComment._id }))
});

module.exports = router;