//get the express router
const router = require('express').Router();
//get the mongoose model
let Exercise = require('../models/exercise.model');

//handles incoming http get requests
router.route('/').get((req, res) => {
    //gets all users from mongoDB
    //return error if invalid request
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error:' + err))

});

//handle post requets
router.route('/add').post((req, res) => {

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = ({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error' + err));
});


module.exports = router;