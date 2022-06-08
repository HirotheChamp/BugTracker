const BugController = require("../controllers/bug.controllers")


module.exports = app => {
    app.get('/api', BugController.index);
    app.post('/api/bug', BugController.createBug); //create
    app.get('/api/bug', BugController.getAllBugs); //getall
    app.get('/api/bug/:id', BugController.getBug); //getone
    app.put('/api/bug/:id', BugController.updateBug); //update
    app.delete('/api/bug/:id', BugController.deleteBug); //delete
}