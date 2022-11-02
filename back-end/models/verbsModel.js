const mongoose = require('mongoose');

const { Schema } = mongoose;

// BasicConjugation Model
const BasicConjugationSchema = new Schema({
    infinitive: {
        type: String,
        required: true,
    },
    iForm: {
        type: String,
        required: true,
    },
    youForm: {
        type: String,
        required: true,
    },
    heSheItForm: {
        type: String,
        required: true,
    },
    weForm: {
        type: String,
        required: true,
    },
    youPluralForm: {
        type: String,
        required: true,
    },
    theyForm: {
        type: String,
        required: true,
    }
});

const BasicConjugation = mongoose.model('basicConjugation', BasicConjugationSchema);

module.exports = BasicConjugation;
