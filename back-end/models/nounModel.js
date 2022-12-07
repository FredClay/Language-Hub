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

const NounCategorySchema = new Schema({
    topicName: {
        type: String,
        require: true,
    },
    formattedName: {
        type: String,
        require: true,
    },
    theNouns: {
        type: [NounSchema]
    }
})

const Noun = mongoose.model('singleNoun', NounSchema);
const NounCategory = mongoose.model('nouns', NounCategorySchema);

module.exports = {Noun, NounCategory};