const router = require('express').Router();
const Comment = require('../models/Comment');
const { isAuth } = require('../middlewares/auth');

router.get('/postId/:id', (req, res) => {
    Comment.find({ postId: req.params.id }).sort({ '_id': -1 })
        .then(comment => res.json(comment))
      .catch(() => next({ status: 404, message: 'Not Found!', type: 'ERROR' }));
});

router.post('/', isAuth, (req, res) => {
    let comment = new Comment(req.body);
    comment.save()
        .then(createdComment => res.status(201).json({ _id: createdComment._id }))
      .catch(() => next({ status: 403, message: 'Forbidden!', type: 'ERROR' }));
});

module.exports = router;