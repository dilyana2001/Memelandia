const router = require('express').Router();
const Comment = require('../models/Comment');
const { isAuth } = require('../middlewares/auth');

router.get('/postId/:id', (req, res) => {
    Comment.find({ postId: req.params.id }).sort({'_id':-1})
        .then(comment => res.json(comment))
});

router.post('/', (req, res) => {
    let comment = new Comment(req.body);
    comment.save()
        .then(createdComment => res.status(201).json({ _id: createdComment._id }))
});

module.exports = router;