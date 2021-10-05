const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment:{
        type: String,
        maxlength: 1000
    },
    username:{
        type: String,
        ref: 'User'
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    postId:{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }
});

module.exports = mongoose.model('Comment', commentSchema);