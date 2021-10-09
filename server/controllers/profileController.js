const router = require('express').Router();
const Profile = require('../models/Profile');
const { isAuth } = require('../middlewares/auth');

router.get('/:id', (req,res)=>{
    Profile.findOne({userId:req.params.id })
        .then(profile =>  res.json(profile));
})

router.post('/:id',(req, res) => {
    const profile = new Profile(req.body);

    profile.save()
        .then(createdProfile => res.status(201).json({ _id: createdProfile._id }));
});

module.exports = router;