const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skill: {type: String},
    level: {type: String}
},{ timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;