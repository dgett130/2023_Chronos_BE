const service = require('../services/project-types');

const getAllProjectTypes = ((req, res) => {
    let projectTypes = service.getAllProjectTypes();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.set('Access-Control-Allow-Credentials', 'true');
    projectTypes.then((result) => {
        console.log(result);
        res.json(result);
    })

})

const getProjectType = ((req, res) => {
    let id = req.params.id;
    let projectType = service.getProjectTypes(id);
    projectType.then((result) => {
        if (!result) {
            res.status(404).send("Project Type Not found!");
        } else {
            console.log(result);
            res.status(200).json(result);
        }
    });
})

const addProjectType = ((req, res) => {
    let projectType = req.body;
    let result = service.addProjectType(projectType);
    result.then((result) => {
        res.status(201).json(result);
    });
})

const updateProjectType = ((req, res) => {
    let projectType = req.body;
    let result = service.updateProjectType(projectType);
    result.then((result) => {
        res.status(200).json(result);
    });
})

const deleteProjectType = ((req, res) => {
    let id = req.params.id;
    let result = service.deleteProjectType(id);
    result.then((result) => {
        res.status(200).json(result);
    })
})

module.exports = {
    getProjectType,
    getAllProjectTypes,
    addProjectType,
    updateProjectType,
    deleteProjectType
}
