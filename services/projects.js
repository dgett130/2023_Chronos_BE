const { getConnection } = require('../config/mongoClient');

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

async function createProject(project) {
    const conn = await getConnection();
    const projects = conn.collection('Projects');

    project._id = project._id.toString();
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