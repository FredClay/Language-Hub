const mongoose = require('mongoose');

const { Schema } = mongoose;

// Vocab Model
const LessonSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    language: {
        type: String,
        require: true,
    },
    summary: {
        type: String,
        require: true,
    },
    difficulty: {
        type: String,
        require: true,
        default: "beginner",
    },
    mainBody: {
        type: [[String]],
        require: true,
        default: [],
    }
});

const Lesson = mongoose.model('lessons', LessonSchema);

module.exports = {Lesson};
