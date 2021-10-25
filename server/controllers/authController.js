const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../devConfig');

router.post('/register', async (req, res, next) => {
    let existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
        return res.status(409).json({ message: 'This username already exist!', type: 'ERROR', code: 409 });
    }
    let user = new User(req.body);
    user.save()
        .then(createdUser => res.status(201).json({ _id: createdUser._id, username: createdUser.username }))
        .catch(() => next({ status: 400, message: 'Invalid register!', type: 'ERROR' }));
});

router.post('/login', (req, res, next) => {
    User.findOne({ username: req.body.username, password: req.body.password })
        .then(user => {
            let token = jwt.sign({ _id: user._id, username: user.username }, config.SECRET, { expiresIn: '3h' });
            res.status(200).json({ _id: user._id, username: user.username, token });
        })
        .catch(() => next({ status: 404, message: 'No such user or password!', type: 'ERROR' }));
});

module.exports = router;