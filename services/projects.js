const { getConnection } = require('../config/mongoClient');
const {ObjectId} = require("mongodb");

async function getProjects() {
    const conn = await getConnection();
    const projects = conn.collection('Projects');
    const result = await projects.find().toArray();
    await conn.client.close();
    return result;
}

async function getProject(id) {
    const conn = await getConnection();
    const projects = conn.collection('Projects')
    const obj = ObjectId.createFromHexString(id);
    const result = await projects.findOne({ _id: obj });
    await conn.client.close();
    return result !== null ? result : null;
}

async function createProject(project) {
    const conn = await getConnection();
    const projects = conn.collection('Projects');

    console.log(project);

    const result = await projects.insertOne(project);
    await conn.client.close();
    return result;
}

async function updateProject(project) {
    const conn = await getConnection();
    const projects = conn.collection('Projects');
    const result = await projects.updateOne({ _id: project._id }, { $set: project });
    await conn.client.close();
    return result;
}

async function deleteProject(id) {
    const conn = await getConnection();
    const projects = conn.collection('Projects');
    const result = await projects.deleteOne({ _id: id });
    await conn.client.close();
    return result;
}



module.exports = {
    getProject,
    getProjects,
    createProject,
    updateProject,
    deleteProject
}