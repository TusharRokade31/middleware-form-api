const Application = require('../models/Application');
const { createTransporter } = require('../config/email');
const { generateEmailTemplate } = require('../utils/emailTemplate');
const path = require('path');
const fs = require('fs');

const submitApplication = async (req, res) => {
    try {
        // Extract form data
        const {
            full_name,
            email,
            phone,
            designation,
            employer,
            experience,
            post_applied
        } = req.body;

        // Check if file was uploaded
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Resume file is required'
            });
        }

        // Create application object
        const applicationData = {
            fullName: full_name,
            email: email,
            phone: phone,
            designation: designation,
            employer: employer,
            experience: parseFloat(experience),
            postAppliedFor: post_applied,
            resumePath: req.file.path,
            resumeOriginalName: req.file.originalname
        };

        // Save to MongoDB
        const application = new Application(applicationData);
        await application.save();

        // Send email notification
        await sendEmailNotification(application, req.file.path);

        res.status(201).json({
            success: true,
            message: 'Application submitted successfully!',
            applicationId: application._id
        });

    } catch (error) {
        console.error('Error submitting application:', error);
        
        // Clean up uploaded file if database save fails
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(500).json({
            success: false,
            message: 'Error submitting application',
            error: error.message
        });
    }
};

const sendEmailNotification = async (application, resumePath) => {
    try {
        const transporter = createTransporter();
        
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `New Job Application - ${application.postAppliedFor}`,
            html: generateEmailTemplate(application),
            attachments: [
                {
                    filename: application.resumeOriginalName,
                    path: resumePath
                }
            ]
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        // Don't throw error here to avoid failing the entire request
    }
};

const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            count: applications.length,
            data: applications
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching applications',
            error: error.message
        });
    }
};

module.exports = {
    submitApplication,
    getAllApplications
};