const express = require('express');
const router = express.Router();

const {
    getProject,
    getProjects
} = require('../controllers/projects');

router.get('/all', getProjects);
router.get('/:id', getProject);

module.exports = router;