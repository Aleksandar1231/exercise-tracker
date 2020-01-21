const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//mongoose schema
const exerciseSchema = new Schema({

    username:{type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true
});

//exercise mongoose model
const Exercise = mongoose.model('Exercise', exerciseSchema);

//export
module.exports = Exercise;