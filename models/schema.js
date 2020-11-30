const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({

    day:{
        type: Date,
        default: function() {new Date() }
    },

    exercises: [
        {
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
                type: Number
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
        }
    ] 
});



const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;