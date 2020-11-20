const mongoose = require("mongoose");



const Schema = mongoose.Schema;

const workoutScheme = new Schema ({

type: { 
    type: String,
    required: "Enter a workout type"
},

name: {
    type: String,
    require: "Enter a workout Name"
},

duration: { 
    type: Number,
    require: "How long did you workout for"
},

weight: {
    type: Number,
},

reps: {
    type: Number,
},

sets: {
    type: Number,
},

resistanceDuration: {
    type: Number,
}
})

module.exports = workoutScheme;