//get the express router
const router = require('express').Router();
//get the mongoose model
let User = require('../models/user.model');

//handles incoming http get requests
router.route('/').get((req, res) => {
    //gets all users from mongoDB
    //return error if invalid request
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err))

});

//handle post requets
router.route('/add').post((req, res) => {

    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error' + err));
});


module.exports = router;