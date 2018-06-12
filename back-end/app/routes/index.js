const express = require('express');
const router = express.Router();
const account = require('./accountRoutes');

module.exports = (app) => {

	// Handle for the player routes
    router.use('/', account);

    // Expose them to the rest of the application
    app.use('/', router);

}
