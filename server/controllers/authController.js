const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../devConfig');

router.post('/register', (req, res, next) => {
    let user = new User(req.body);
    if (!User.findOne({ username: user.username })) {
        user.save()
            .then(createdUser => res.status(201).json({ _id: createdUser._id }))
            .catch(() => next({ status: 403, message: 'Invalid register!', type: 'ERROR' }));
    }
    next({ status: 409, message: { message: 'This username already exist!', code: 409 }, type: 'ERROR' });
});

router.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username, password: req.body.password })
        .then(user => {
            let token = jwt.sign({ _id: user._id, username: user.username }, config.SECRET, { expiresIn: '3h' });
            res.status(200).json({ _id: user._id, username: user.username, token })
        })
        .catch(() => next({ status: 404, message: 'No such user or password!', type: 'ERROR' }));
});

module.exports = router;