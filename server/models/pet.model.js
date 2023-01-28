const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required"],
        minLength: [3, "Name must be 3 characters long"],
        unique: [true, "Name must be unique"]
    },
    type: {
        type: String,
        required: [true, "Pet type required"],
        minLength: [3, "Pet type must be 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description required"],
        minLength: [3, "Description must be 3 characters long"]
    },
    skill_1: {
        type: String,
        required: [false] 
    },
    skill_2: {
        type: String,
        required: [false] 
    },
    skill_3: {
        type: String,
        required: [false] 
    },
}, {timestamps: true})

PetSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Pet', PetSchema)
