const express = require('express');
const router = express.Router();

const {
    getProjects
} = require('../controllers/projects');

router.get('/all', getProjects);

module.exports = router;