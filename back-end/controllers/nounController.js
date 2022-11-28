const router = require('express').Router();

const {Noun} = require('../models/nounModel');

router.post('/addNoun', (req, res, next) => {
    Noun.create(req.body)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.get('/getNoun/:_id', (req, res, next) => {
    const { _id } = req.params;
    
    Noun.find({ _id: _id })
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getAll', (req, res, next) => {
    Noun.find({})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getAllPretty', (req, res, next) => {
    Noun.find({}, {"english": true, "translation": true})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getSelection/:count', (req, res, next) => {
    const intCount = parseInt(req.params.count);
    
    Noun.aggregate([ { $sample: { size: intCount } } ])
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteNoun/:_id', (req, res, next) => {
    const { _id } = req.params;

    Noun.findOneAndDelete({ _id: _id})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteAllNouns', (req, res, next) => {
    Noun.deleteMany({})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
})

module.exports = router;