const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// const express = require('express');
// // const { get } = require('http');
// const mongoose = require('mongoose');
// const logger = require('morgan');
// // const dotenv = require('dotenv').config();

// // const { Workout } = require('./models');
// // const db = require('./models');

// const PORT = process.env.PORT || 3000;
// // create express instance
// const app = express();

// // set logger
// app.use(logger('dev'));

// // set public folder and urlencoding
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));

// const uri = process.env.ATLAS_URI;
// // connect to the database
// mongoose.connect(process.env.MONGODB_URI || uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });
// mongoose.connection.once('open', () => {
//   console.log('Connected to the Database!!');
// });

// require('./routes/api')(app);
// // require('./routes/html-routes')(app);

// app.listen(PORT, () => {
//   console.log(`APP is running on port: ${PORT}!`);
// });


// module.exports = (app)