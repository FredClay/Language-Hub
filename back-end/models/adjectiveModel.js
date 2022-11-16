const mongoose = require('mongoose');

const { Schema } = mongoose;

// Adjective Model
const AdjectiveSchema = new Schema({
    english: {
        type: String,
        require: true,
    },
    german: {
        type: String,
        require: true,
    },
    flags: {
        type: Number,
        default: 0,
    }
});

const Adjectives = mongoose.model('adjectives', AdjectiveSchema);

module.exports = Adjectives;
