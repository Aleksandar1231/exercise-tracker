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

//get exercise by id
router.route("/:id").get((req, res) => {
    
    Exercise.findById(req.params.id)
    .then((exercise)=>res.json(exercise))
    .catch((err)=>res.status(400).json("Error: "+err))
});

//update exercise by id
router.route("/update/:id").post((req,res) => {

    Exercise.findById(req.params.id)
    .then((exercise) => {
        const username = req.body.username;
        const description = req.body.description;
        const duration = Number(req.body.duration);
        const date = Date.parse(req.body.date);

        
        exercise.username=username;
        exercise.description=description;
        exercise.duration= duration;
        exercise.date=date;

        exercise.save()
        .then(()=> res.json("Exercise is updated"))
        .catch((err)=>res.status(400).json("Error is:" + err))
        
    })
    .catch((err)=> res.status(400).json("error is: "+err))
    
});

//delete exercise
router.route('/:id').delete((req,res)=>{
    
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Exercise is deleted!"))
    .catch((err) => res.status(400).json("Error: "+ err))

});

//handle post requets
router.route('/add').post((req, res) => {

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save().
    then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error' + err));
});


module.exports = router;