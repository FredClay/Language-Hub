const mongoose = require('mongoose');

const { Schema } = mongoose;

// UserLogin Model
const UserLoginSchema = new Schema({
    username: {
        type: String,
        min: 4,
        require: true,
    },
    password: {
        type: String,
        min: 4,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    userScore: {
        type: Number,
        default: 0,
    }
});

const UserInfo = mongoose.model('userDetails', UserLoginSchema);

module.exports = UserInfo;
