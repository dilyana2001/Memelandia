const router = require('express').Router();
const Comment = require('../models/Comment');
const { isAuth } = require('../middlewares/auth');

router.get('/', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
});

router.post('/', (req, res) => {
    let comment = new Comment(req.body);
    comment.save()
        .then(createComment => res.status(201).json({ _id: createComment._id }))
});

module.exports = router;