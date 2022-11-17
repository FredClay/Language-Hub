const router = require('express').Router();

const Adjective = require('../models/adjectiveModel');

router.post('/addAdjective', (req, res, next) => {
    Adjective.create(req.body)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.get('/getAdjective/:_id', (req, res, next) => {
    const { _id } = req.params;
    
    Adjective.find({ _id: _id })
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getAll', (req, res, next) => {
    Adjective.find({})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getSelection/:count', (req, res, next) => {
    const intCount = parseInt(req.params.count);
    
    Adjective.aggregate([ { $sample: { size: intCount } } ])
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
})

router.delete('/deleteAdjective/:_id', (req, res, next) => {
    const { _id } = req.params;

    Adjective.findOneAndDelete({ _id: _id})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteAllAdjectives', (req, res, next) => {
    Adjective.deleteMany({})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
})

module.exports = router;