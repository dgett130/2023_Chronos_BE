const express = require('express');
const router = express.Router();

const {
    getProjectType,
    getAllProjectTypes,
    addProjectType,
    updateProjectType,
    deleteProjectType
} = require('../controllers/project-types');

router.get('/all', getAllProjectTypes);
router.get('/:id', getProjectType);
router.post('/insert', addProjectType);
router.put('/update', updateProjectType);
router.delete('/delete/:id', deleteProjectType);

module.exports = router;
