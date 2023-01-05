const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expertSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    language: {
        type: Array,
        required: true
    },
    specialization: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    block: {
        type: Boolean,
        default: false,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    availableDate: {
        type: Date
    }


}, { timestamps: true })

module.exports = mongoose.model('expert', expertSchema)