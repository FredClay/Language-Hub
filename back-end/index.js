const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

// TODO
mongoose.connect(`${process.env.MONGOPREFIX}${process.env.USER}:${process.env.PW}${process.env.MONGOSUFFIX}`, { useNewUrlParser: true}, (err) => {
    if (err) return console.log(err);
    return console.log('Connection Successful!');
});

const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const verbRoutes = require('./controllers/verbsController');
app.use('/basicVerbs', verbRoutes);

// const teamRoutes = require('./controllers/teamsController');
// app.use('/teams', teamRoutes);

// const driverRoutes = require('./controllers/driversController');
// app.use('/drivers', driverRoutes);

// const userRoutes = require('./controllers/userController');
// app.use('/users', userRoutes);

app.get('/greeting', (req, res) => {
    res.send("Hello from LanguageHub!")
});

app.use('*', (req, res, next) => {
    next({status: 404, msg: "Not a valid URL!"})
});

app.use((err, req, res, next) => {
    console.log("Error Found!");
    console.log(err.msg);
    return res.status(err.status).send(err.msg);
});

const server = app.listen(5000, () => {
    console.log(`Started server on port No. ${server.address().port}`);
});

module.exports = server;