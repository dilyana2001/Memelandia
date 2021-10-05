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
        maxlength: 100
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Post', postSchema);