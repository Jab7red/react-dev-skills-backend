// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const skillsRouter = require('./controllers/skills');
const skillsController = require('./controllers/skills');
const app = express();
require('dotenv').config();
const {DATABASE_URL, PORT} = process.env;
// =======================================
//           DATABASE CONNECTIONS
// =======================================
mongoose.connect(DATABASE_URL);
// =======================================
//    DATABASE CONNECTIONS ERROR/SUCCESS
// =======================================
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/skills', skillsRouter);
// =======================================
//              APP LISTENER
// =======================================
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});