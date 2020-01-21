const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//user schema
const userSchema = new Schema({

    username:{
        type: String, 
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true
});

//user mongoose model
const User = mongoose.model('User', userSchema);

//export
module.exports = User;