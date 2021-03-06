const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
        maxlength: 10000,
        required: true,
    },
    senderUsername: {
        type: String,
        ref: 'User'
    },
    senderId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    receiverId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Message', messageSchema);