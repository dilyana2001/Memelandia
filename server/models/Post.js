const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 50
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^http?/
    },
    description: {
        type: String,
        maxlength: 500
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

module.exports = mongoose.model('Post', postSchema);