const express = require('express');
const router = express.Router();

const {
    getProject,
    getProjects,
    createProject,
    updateProject,
    deleteProject
} = require('../controllers/projects');

router.get('/all', getProjects);
router.get('/:id', getProject);
router.post('/insert', createProject);
router.put('/update', updateProject);
router.delete('/delete/:id', deleteProject);

module.exports = router;