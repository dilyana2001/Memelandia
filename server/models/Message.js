const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    title:{
        type: String,
        maxlength: 50
    },
    description:{
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
    }
});

module.exports = mongoose.model('Message', messageSchema);