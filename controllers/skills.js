// Set up Controller
const express = require('express');

// Initialize the Express Router Object
const skillsRouter = express.Router();

// Require the Model
const Skill = require('../models/skill');


//ROUTES

//Index
skillsRouter.get('/', (req, res) => {
    Skill.find({}, (err, skills) => {
        res.json(skills);
    });
});
//Create
skillsRouter.post('/', (req, res) => {
    Skill.create(req.body, (err, skill) => {
        res.json(skill);
    });
});

module.exports = skillsRouter;