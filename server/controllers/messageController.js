const router = require('express').Router();
const Message = require('../models/Message');
const Feedback = require('../models/Feedback');
const { isAuth } = require('../middlewares/auth');

router.get('/receiverId/:id', (req, res) => {
    Message.find({ receiverId: req.params.id }).sort({ '_id': -1 })
        .then(message => res.json(message))
});

router.post('/receiverId/:receiverId/senderId/:senderId', (req, res) => {
    let message = new Message(req.body);
    message.save()
        .then(createdMessage => res.status(201).json({ _id: createdMessage._id }))
});

router.post('/feedback', (req, res) => {
    let feedback = new Feedback(req.body);
    feedback.save()
        .then(createdFeedback => res.status(201).json({ _id: createdFeedback._id }))
});

module.exports = router;