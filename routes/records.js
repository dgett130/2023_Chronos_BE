const express = require('express');
const router = express.Router();

const {
    getRecord,
    getRecords,
    createRecord,
    updateRecord,
    deleteRecord
} = require('../controllers/records');

router.get('/all', getRecords);
router.get('/:id', getRecord);
router.post('/insert', createRecord);
router.put('/update', updateRecord);
router.delete('/delete/:id', deleteRecord);

module.exports = router;