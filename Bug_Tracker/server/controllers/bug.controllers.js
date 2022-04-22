const {Bug} = require('../models/bug.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//create
module.exports.createBug = (request, response) => {
    const {    description, 
       dev, priority} = request.body;
    Bug.create({
        description, 
        dev, priority
    })
        .then(newBug => response.json(newBug)) //add validations
        .catch(err => response.status(400).json(err));
}

//get all
module.exports.getAllBugs = (request, response) => {
    Bug.find()
        .then(bugs => response.json(bugs))
        .catch(err => response.json(err))
}


//show one 
module.exports.getBug = (request, response) => {
    Bug.findOne({_id: request.params.id})
        .then(bug => response.json(bug))
        .catch(err => response.json(err))
}


//update
module.exports.updateBug = (request, response) => {
    Bug.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    
        .then(updatedBug => response.json(updatedBug))
        .catch(err => response.json(err))
}

//delete
module.exports.deleteBug = (request, response) => {
    Bug.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}