const express = require('express');
const router = express.Router();

const {
    getProjectType,
    getAllProjectType,
    addProjectType,
    updateProjectType,
    deleteProjectType
} = require('../controllers/project-types');

router.get('/all', getAllProjectType);
router.get('/:id', getProjectType);
router.post('/insert', addProjectType);
router.put('/update', updateProjectType);
router.delete('/delete/:id', deleteProjectType);

module.exports = router;
