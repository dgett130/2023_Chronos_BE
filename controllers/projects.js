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

const createProject = ((req, res) => {
    let project = req.body;
    let result = service.createProject(project);
    result.then((result) => {
        res.status(201).json(result);
    });
})

const updateProject = ((req, res) => {
    let project = req.body;
    let result = service.updateProject(project);
    result.then((result) => {
        res.status(200).json(result);
    });
})

const deleteProject = ((req, res) => {
    let id = req.params.id;
    let result = service.deleteProject(id);
    result.then((result) => {
        res.status(200).json(result);
    })
})

module.exports = {
    getProject,
    getProjects,
    createProject,
    updateProject,
    deleteProject
};