const router = require('express').Router();

const {Lesson} = require('../models/lessonModel');

router.post('/addLesson', (req, res, next) => {
    Lesson.create(req.body)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.get('/getLesson/:_id', (req, res, next) => {
    const { _id } = req.params;
    
    Lesson.findOne({ _id: _id })
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getAll', (req, res, next) => {
    Lesson.find({})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getByLanguage/:language', (req, res, next) => {
    const { language } = req.params;
    Lesson.find({language: language}, {"mainBody": false})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteLesson/:_id', (req, res, next) => {
    const { _id } = req.params;

    Lesson.findOneAndDelete({ _id: _id})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteAllLessons', (req, res, next) => {
    Lesson.deleteMany({})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
})

module.exports = router;