const { getConnection } = require('../config/mongoClient');
const {ObjectId} = require("mongodb");
const ApiResponse = require("../models/ApiResponse");

async function getAllProjectTypes() {
    const conn = await getConnection();
    const projectTypes = conn.collection('Project_types');
    const result = await projectTypes.find().toArray();
    await conn.client.close();
    return result;
}

async function getProjectTypes(id) {
    const conn = await getConnection();
    const projectTypes = conn.collection('Project_types')
    const obj = ObjectId.createFromHexString(id);
    const result = await projectTypes.findOne({ _id: obj });
    await conn.client.close();
    return result !== null ? result : null;
}

async function addProjectType(projectType) {
    const conn = await getConnection();
    const projectTypes = conn.collection('Project_types');
    const result = await projectTypes.insertOne(projectType);
    await conn.client.close();
    return result;
}

async function updateProjectType(projectType) {
    const conn = await getConnection();
    const projectTypes = conn.collection('Project_types');
    try {
        projectType._id = ObjectId.createFromHexString(projectType._id);
    } catch (e) {
        return ApiResponse.error(e, projectType, "Invalid ID");
    }
    const result = await projectTypes.updateOne(
        { _id: projectType._id },
        { $set: projectType }
    ).then((result) => {
        if (result.matchedCount === 0) {
            return ApiResponse.notFound(null);
        } else if (result.modifiedCount === 0) {
            return ApiResponse.error(projectType, "No changes were made");
        } else {
            return ApiResponse.success(projectType);
        }
    });
    await conn.client.close();
    return result;
}

async function deleteProjectType(id) {
    const conn = await getConnection();
    const projectTypes = conn.collection('Project_types');
    const result = await projectTypes.deleteOne({ _id: id });
    await conn.client.close();
    return result;
}

module.exports = {
    getProjectTypes,
    getAllProjectTypes,
    addProjectType,
    updateProjectType,
    deleteProjectType
}
