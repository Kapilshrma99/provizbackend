// server/routes/applications.js
const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// POST /api/applications - Submit application
router.post('/', async (req, res) => {
    try {
        const application = new Application(req.body);
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
