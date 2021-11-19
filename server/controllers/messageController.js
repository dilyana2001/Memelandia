const router = require('express').Router();
const Message = require('../models/Message');
const Feedback = require('../models/Feedback');
const { isAuth } = require('../middlewares/auth');

router.get('/receiverId/:id', isAuth, (req, res) => {
    Message.find({ receiverId: req.params.id }).sort({ '_id': -1 })
        .then(message => res.json(message))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
});

router.post('/receiverId/:receiverId/senderId/:senderId', isAuth, (req, res) => {
    let message = new Message(req.body);
    message.save()
        .then(createdMessage => res.status(201).json({ _id: createdMessage._id }))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
});

router.get('/receiverId/:receiverId/senderId/:senderId', isAuth, (req, res) => {
    Message.find({ receiverId: req.params.receiverId, senderId: req.params.senderId }).sort({ '_id': -1 })
        .then(messages => res.json(messages))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
})

router.get('/senderId/:senderId/receiverId/:receiverId', isAuth, (req, res) => {
    Message.find({ receiverId: req.params.receiverId, senderId: req.params.senderId }).sort({ '_id': -1 })
        .then(messages => res.json(messages))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
})

router.delete('/:id', isAuth, (req, res) => {
    Message.findByIdAndRemove(req.params.id)
        .then(deletedComment => res.status(201).json({ _id: deletedComment._id }))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));

});

router.post('/feedback', (req, res) => {
    let feedback = new Feedback(req.body);
    feedback.save()
        .then(createdFeedback => res.status(201).json({ _id: createdFeedback._id }))
        .catch(() => res.status(404).json({ message: 'Not Found!', type: 'ERROR' }));
});

module.exports = router;