const { getConnection } = require('../config/mongoClient');
const {ObjectId} = require("mongodb");
const ApiResponse = require("../models/ApiResponse");

async function getRecords() {
    const conn = await getConnection();
    const records = conn.collection('Records');
    const result = await records.find().toArray();
    await conn.client.close();
    return result;
}

async function getRecord(id) {
    const conn = await getConnection();
    const records = conn.collection('Records')
    const obj = ObjectId.createFromHexString(id);
    const result = await records.findOne({ _id: obj });
    await conn.client.close();
    return result !== null ? result : null;
}

async function getRecordByMonth(month) {
    const conn = await getConnection();
    const records = conn.collection('Records');
    const result = await records.find({ 'datetime': {$regex: '\\d{4}-[' + month + ']-\\d{2} \\d{2}:\\d{2}:\\d{2}'} }).toArray();
    console.log(result);
    await conn.client.close();
    return result;
}

async function createRecord(record) {
    const conn = await getConnection();
    const records = conn.collection('Records');
    const result = await records.insertOne(record);
    await conn.client.close();
    return result;
}

async function updateRecord(record) {
    const conn = await getConnection();
    const records = conn.collection('Records');
    try {
        record._id = ObjectId.createFromHexString(record._id);
    } catch (e) {
        return ApiResponse.error(e, record, "Invalid ID");
    }
    const result = await records.updateOne(
        { _id: record._id },
        { $set: record }
    ).then((result) => {
        if (result.matchedCount === 0) {
            return ApiResponse.notFound(null);
        } else if (result.modifiedCount === 0) {
            return ApiResponse.error(record, "No changes were made");
        } else {
            return ApiResponse.success(record);
        }
    });
    await conn.client.close();
    return result;
}

async function deleteRecord(id) {
    const conn = await getConnection();
    const records = conn.collection('Records');
    const result = await records.deleteOne({ _id: id });
    await conn.client.close();
    return result;
}

module.exports = {
    getRecord,
    getRecords,
    getRecordByMonth,
    createRecord,
    updateRecord,
    deleteRecord
}