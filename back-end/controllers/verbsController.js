const router = require('express').Router();

const Verb  = require('../models/verbsModel');

router.post('/addNewVerb', (req, res, next) => {
    if (!req.body || Object.keys(req.body).length != 7) return next({status: 400, msg: "Incomplete/No body provided. Please provide a valid string for all forms of the verb."});

    Verb.create(req.body)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.get('/getAllVerbs', (req, res, next) => {
    Verb.find({})
        .then((results) => res.status(200).json(results))
        .catch((err) => next(err));
});

router.get('/getSpecificVerb/:infinitive', (req, res, next) => {
    const { infinitive } = req.params;
    
    Verb.find({ infinitive: infinitive })
        .then((results) => res.status(200).json(results))
        .catch((err) => next(err));
});

module.exports = router;