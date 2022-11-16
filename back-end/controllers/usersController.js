const router = require('express').Router();

const User = require('../models/userModel');

router.post('/newUser', (req, res, next) => {
    User.create(req.body)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.get('/getUser/:_id', (req, res, next) => {
    const { _id } = req.params;
    
    User.find({ _id: _id })
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteUser/:_id', (req, res, next) => {
    const { _id } = req.params;

    User.findOneAndDelete({ _id: _id})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
});

router.delete('/deleteAllUsers', (req, res, next) => {
    User.deleteMany({})
        .then((result) => res.status(204).json(result))
        .catch((err) => next(err));
})

module.exports = router;