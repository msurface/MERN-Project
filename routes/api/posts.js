// to make posts route
// express router
const express = require('express');
const router = express.Router();

// creating a get route and using a call back
// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Posts Route'));

module.exports = router;
