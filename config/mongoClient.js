const {MongoClient} = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017/";
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    }
    
}

async function getConnection() {
    const uri = "mongodb://localhost:27017/";
    const client = new MongoClient(uri);
    await client.connect();
    return client.db('chronos_01');
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

module.exports = {
    getConnection
};