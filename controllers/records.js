const service = require('../services/records');

const getRecords = ((req, res) => {
    let records = service.getRecords();
    records.then((result) => {
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
            res.status(200).json(result);
        }
    });
});

const getRecordByMonth = ((req, res) => {
    let month = req.params.month;
    let record = service.getRecordByMonth(month);
    record.then((result) => {
        if (!result) {
            res.status(404).send("Record Not found!");
        } else {
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
    getRecordByMonth,
    createRecord,
    updateRecord,
    deleteRecord
}
