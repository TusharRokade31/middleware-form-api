const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { submitApplication, getAllApplications } = require('../controllers/applicationController');

// POST /api/applications - Submit new application
router.post('/', upload.single('resume'), submitApplication);

// GET /api/applications - Get all applications (for admin)
router.get('/', getAllApplications);

module.exports = router;