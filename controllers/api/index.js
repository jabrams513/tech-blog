const express = require('express');
const router = express.Router();

// Importing user, post, and comment routes
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Middleware to handle routes for users
router.use('/users', userRoutes);

// Middleware to handle routes for posts
router.use('/posts', postRoutes);

// Middleware to handle routes for comments
router.use('/comments', commentRoutes);

// Export the configured router for use in other parts of the application
module.exports = router;