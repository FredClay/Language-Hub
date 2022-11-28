const mongoose = require('mongoose');

const { Schema } = mongoose;

// Noun Model
const NounSchema = new Schema({
    english: {
        type: String,
        require: true,
    },
    translation: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    flags: {
        type: Number,
        default: 0,
    }
});

const Noun = mongoose.model('nouns', NounSchema);

module.exports = {Noun};