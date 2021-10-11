const router = require('express').Router();
const Profile = require('../models/Profile');
const { isAuth } = require('../middlewares/auth');

router.get('/:id', (req, res) => {
    Profile.findOne({ userId: req.params.id })
        .then(profile => res.json(profile));
});

router.post('/:id', (req, res) => {
    const profile = new Profile(req.body);

    profile.save()
        .then(createdProfile => res.status(201).json({ _id: createdProfile._id }));
});

router.put('/:id', (req, res) => {
    const profile = new Profile({ _id: req.params.id, ...req.body });
    Profile.findByIdAndUpdate(req.params.id, profile)
        .then(updated => res.status(201).json({ _id: updated._id }))
});

router.get('/', (req, res) => {
    Profile.find().sort({'username':1})
        .then(profiles => res.json(profiles));
});

router.get('/search/:query', (req, res) => {
    Profile.find({ username: { $regex: `${req.params.query}`, $options: "i" } }).sort({'username':1})
        .then(profiles => res.json(profiles));
});


module.exports = router;