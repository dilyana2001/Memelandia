const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String
});

module.exports = mongoose.model('Post', postSchema);