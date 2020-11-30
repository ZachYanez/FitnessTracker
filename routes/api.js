const router = require("express").Router()
const { request } = require("express")
const Workout = require("../models/schema")

router.get("/api/Workouts", (req,res)=> {
        Workout.find()
        .then(dbWorkouts =>{
            res.json(dbWorkouts)
        })
        .catch(err =>{
            res.json(err)
        })
})


router.get("/api/Workouts/range", (req ,res)=> {
    Workout.find().sort({day:-1 }).limit(7).then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json(err)
    });
});

router.get("/api/Workouts/:id", (req,res)=> {
    Workout.create({}).then(data =>{
        res.json(dbWorkouts)
    })
    .catch(err =>{
        res.json(err);
    });
});



module.exports = router