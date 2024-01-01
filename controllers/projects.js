const service = require('../services/projects');

const getProjects = ((req, res) => {
    let projects = service.getProjects();
    projects.then((result) => {
        res.json(result);
    });
});

const getProject = ((req, res) => {
    let id = req.params.id;
    let project = service.getProject(id);
    project.then((result) => {
        if (!result) {
            res.status(404).send("Project Not found!");
        } else {
            console.log(result);
            res.status(200).json(result);
        }
    });
});

module.exports = {
    getProject,
    getProjects
};