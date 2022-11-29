const router = require('express').Router();

const {Noun, NounCategory} = require('../models/nounModel');

router.post('/createTopic/:topicName', (req, res, next) => {
    const { topicName } = req.params;
    
    NounCategory.create({topicName: topicName})
        .then((result) => res.status(201).json(result))
        .catch((err) => next({status: 404, msg: "That topic doesn't exist."}));
})

router.put('/addNoun/:topic', (req, res, next) => {    
    const { topic } = req.params;
    
    const myNoun = Noun(req.body);
    
    NounCategory.findOneAndUpdate({topicName: topic}, 
        { "$push": {"theNouns": myNoun}})
        .then((result) => res.status(201).json(myNoun))
        .catch((err) => next(err));
});

router.get('/getNoun/:_id', (req, res, next) => {
    const { _id } = req.params;
    
    Noun.find({ _id: _id })
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getAll', (req, res, next) => {
    NounCategory.find({}, {"theNouns": true})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getAllPretty', (req, res, next) => {
    Noun.find({}, {"english": true, "translation": true})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getSelection/:topic/:count', (req, res, next) => {
    const { topic, count } = req.params;
    const intCount = parseInt(count);
    
    const thisDocument = NounCategory.findOne({topicName: topic});
    
    thisDocument.theNouns.aggregate([ { $sample: { size: intCount } } ])
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
    NounCategory.deleteMany({})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteTopic/:topicID', (req, res, next) => {
    const { topicID } = req.params;
    
    NounCategory.deleteOne({topicID})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
})

module.exports = router;