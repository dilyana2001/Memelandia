const router = require('express').Router();
const Profile = require('../models/Profile');
const User = require('../models/User');
const { isAuth } = require('../middlewares/auth');

router.get('/:id', (req, res) => {
    Profile.findOne({ userId: req.params.id })
        .then(profile => res.json(profile))
        .catch(() => res.status(404).json({ message: 'Not Found!', type: 'ERROR' }));
});

router.post('/:id', isAuth, (req, res) => {
    const profile = new Profile(req.body);

    profile.save()
        .then(createdProfile => res.status(201).json({ _id: createdProfile._id }))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
});

router.put('/:id', isAuth, (req, res) => {
    const profile = new Profile({ _id: req.params.id, ...req.body });
    Profile.findByIdAndUpdate(req.params.id, profile)
        .then(updated => res.status(201).json({ _id: updated._id }))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
});

router.get('/', isAuth, (req, res) => {
    Profile.find().sort({ 'username': 1 })
        .then(profiles => res.json(profiles))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
});

router.get('/search/:query', (req, res) => {
    Profile.find({ username: { $regex: `${req.params.query}`, $options: "i" } }).sort({ 'username': 1 })
        .then(profiles => res.json(profiles))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
});

router.delete('/:userId', isAuth, (req, res) => {
    Profile.findOneAndRemove({ userId: req.params.userId })
        .then(deleted => res.status(200).json({ _id: deleted._id }))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
});

router.delete('/users/:id', isAuth, (req, res) => {
    User.findOneAndRemove({ _id: req.params.id })
        .then(deleted => res.status(200).json({ _id: deleted._id }))
        .catch(() => res.status(403).json({ message: 'Forbidden!', type: 'ERROR' }));
});

module.exports = router;