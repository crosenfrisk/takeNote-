// Imports
const express = require('express');
const router = require('express').Router();

// Route Paths
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Use Routes
router.use(apiRoutes);
router.use(htmlRoutes);

module.exports = router;
