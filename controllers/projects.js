const service = require('../services/projects');

const getProjects = ((req, res) => {
    let projects = service.getProjects();
    projects.then((result) => {
        res.json(result);
    });
});

module.exports = {
    getProjects
};