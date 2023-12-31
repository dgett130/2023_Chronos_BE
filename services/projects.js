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

module.exports = {
    createProject,
    getProjects
}