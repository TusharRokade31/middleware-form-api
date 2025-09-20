const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    // Personal Information
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    
    // Professional Details
    designation: {
        type: String,
        required: true,
        trim: true
    },
    employer: {
        type: String,
        required: true,
        trim: true
    },
    experience: {
        type: Number,
        required: true,
        min: 0
    },
    postAppliedFor: {
        type: String,
        required: true,
        trim: true
    },
    
    // File Information
    resumePath: {
        type: String,
        required: true
    },
    resumeOriginalName: {
        type: String,
        required: true
    },
    
    // Metadata
    applicationDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'shortlisted', 'rejected'],
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);