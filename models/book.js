const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    isbn: {
        type: String,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    publisher: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    published_year: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Books', bookSchema);