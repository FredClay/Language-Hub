const router = require('express').Router();

const bcrypt = require('bcrypt');

const User = require('../models/userModel');

router.post('/newUser', async (req, res, next) => {
    let newBody = {...req.body};
    const salt = await bcrypt.genSalt(5);
    const hashPW = await bcrypt.hash(newBody.password, salt);
    newBody.password = hashPW;

    User.create(newBody)
        .then((result) => res.status(201).json(result))
        .catch((err) => next(err));
});

router.get('/getUser/:_id', (req, res, next) => {
    const { _id } = req.params;
    
    User.find({ _id: _id })
        .then((result) => res.status(200).json(result))
        .catch((err) => next(err));
});

router.post('/getUser/login', async (req, res, next) => {
    const {username, password} = req.body;

    try {
    const user = await User.findOne({ username: username });
    validPW = await bcrypt.compare(password, user.password);
    if (validPW) {
        return res.status(200).json(user);
    }
    }
    catch (error) {
        return res.status(404).json({msg: "Invalid Credentials"})
    }
    return res.status(404).json({msg: "Invalid Credentials"})



    //TODO
    // Add no user found / wrong pw. DONT SEND PW BACK!

        // .then((result) => res.status(200).json(result))
        // .catch((err) => next(err));
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