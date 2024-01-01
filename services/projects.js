const { getConnection } = require('../config/mongoClient');

async function createProject(project) {
    const conn = await getConnection();
    const projects = conn.collection('Projects');
    const result = await projects.insertOne(project);
    await conn.client.close();
    return result;
}

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
    const result = await projects.findOne({ _id: id });
    await conn.client.close();
    return result !== null ? result : null;
}

module.exports = {
    getProject,
    getProjects
}