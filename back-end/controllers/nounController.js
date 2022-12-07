const router = require('express').Router();

const {Noun, NounCategory} = require('../models/nounModel');

router.get('/getTopics', (req, res, next) => {
    NounCategory.find({}, {"topicName": true, "_id": false})
    .then((result) => res.status(200).json(result))
    .catch((err) => next());
})

router.post('/createTopic/:topicName', (req, res, next) => {
    const { topicName } = req.params;
    const searchName = topicName.replace(" ", "").toLowerCase();
    
    NounCategory.create({topicName: topicName, searchName: searchName})
        .then((result) => res.status(201).json(result))
        .catch((err) => next());
})

router.put('/addNoun/:topic', (req, res, next) => {    
    const { topic } = req.params;
    
    const myNoun = Noun(req.body);
    
    NounCategory.findOneAndUpdate({topicName: topic}, 
        { "$push": {"theNouns": myNoun}})
        .then((result) => res.status(201).json(myNoun))
        .catch((err) => next({status: 404, msg: "That topic doesn't exist."}));
});

router.get('/getNoun/:_id', (req, res, next) => {
    const { _id } = req.params;
    
    Noun.find({ _id: _id })
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getAll', (req, res, next) => {
    NounCategory.find({})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getAllPretty', (req, res, next) => {
    Noun.find({}, {"english": true, "translation": true})
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.get('/getTopicNouns/:topic', (req, res, next) => {
    const { topic } = req.params;
    
    NounCategory.findOne({topicName: topic})
        .then((result) => {res.status(200).json(result.theNouns)})
        .catch((err) => next(err));
})

router.get('/getSelection/:topic/:count', (req, res, next) => {
    const { topic, count } = req.params;
    const intCount = parseInt(count);
    
    NounCategory.aggregate([ 
        {$match: {formattedName: topic}},
        {$unwind: "$theNouns"},
        {$sample: { size: intCount } }
    ])
        .then((result) => myArray = result.map((thisOne) => thisOne.theNouns))
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteTopic/:topicID', (req, res, next) => {
    const { topicID } = req.params;
    
    NounCategory.deleteOne({topicID})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
})

module.exports = router;