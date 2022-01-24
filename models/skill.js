const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skill: String,
    level: String
},{ timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;