const router = require('express').Router();
const Message = require('../models/Message');
const { isAuth } = require('../middlewares/auth');

router.get('/userId/:id', (req, res) => {
    Message.find({ userId: req.params.id })
        .then(message => res.json(message))
});

router.post('/userId/:id', (req, res) => {
    let message = new Message(req.body);
    message.save()
        .then(createdMessage => res.status(201).json({ _id: createdMessage._id }))
});

module.exports = router;