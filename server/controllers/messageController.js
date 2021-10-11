const router = require('express').Router();
const Message = require('../models/Message');
const { isAuth } = require('../middlewares/auth');

router.get('/receiverId/:id', (req, res) => {
    Message.find({ receiverId: req.params.id }).sort({'_id':-1})
        .then(message => res.json(message))
});

router.post('/receiverId/:receiverId/senderId/:senderId', (req, res) => {
    let message = new Message(req.body);
    message.save()
        .then(createdMessage => res.status(201).json({ _id: createdMessage._id }))
});

module.exports = router;