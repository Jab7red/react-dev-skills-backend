// Set up Controller
const express = require('express');

// Initialize the Express Router Object
const skillsRouter = express.Router();

// Require the Model
const Skill = require('../models/skill');


//ROUTES

//Index
skillsRouter.get('/api/skills', (req, res) => {
    Skill.find({}, (err, allSkills) => {
        res.json(skills)
    });
});
//Create
skillsRouter.post('/', (req, res) => {
    Skill.create(req.body, (err, createdSkill) => {
        res.json('/api/skills')
    });
});

module.exports = skillsRouter;