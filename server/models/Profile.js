const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    imageUrl: {
        type: String,
        validate: /^http?/
    },
    info: {
        type: String,
        maxlength: 100
    },
    username:{
        type: String,
        ref: 'User'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Profile', profileSchema);