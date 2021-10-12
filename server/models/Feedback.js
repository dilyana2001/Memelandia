const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
        maxlength: 50
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);