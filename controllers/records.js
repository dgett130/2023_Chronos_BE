const service = require('../services/records');

const getRecords = ((req, res) => {
    let records = service.getRecords();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.set('Access-Control-Allow-Credentials', 'true');
    records.then((result) => {
        console.log(result);
        res.json(result);
    })
});

const getRecord = ((req, res) => {
    let id = req.params.id;
    let record = service.getRecord(id);
    record.then((result) => {
        if (!result) {
            res.status(404).send("Record Not found!");
        } else {
            console.log(result);
            res.status(200).json(result);
        }
    });
});

const createRecord = ((req, res) => {
    let record = req.body;
    let result = service.createRecord(record);
    result.then((result) => {
        res.status(201).json(result);
    });
})

const updateRecord = ((req, res) => {
    let record = req.body;
    let result = service.updateRecord(record);
    result.then((result) => {
        res.status(200).json(result);
    });
})

const deleteRecord = ((req, res) => {
    let id = req.params.id;
    let result = service.deleteRecord(id);
    result.then((result) => {
        res.status(200).json(result);
    })
})

module.exports = {
    getRecord,
    getRecords,
    createRecord,
    updateRecord,
    deleteRecord
}
