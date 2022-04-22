const mongoose = require('mongoose');
const BugSchema = new mongoose.Schema({
    description: { 
    type: String, 
    required: [true, "Description is required"],
    minlength: [5, "Description must be at least 5 characters"]

},

dev: { 
    type: String, 
    required: [true, "Dev is required"],
   
    

},

priority: { 
    type: String, 
    required: [true, "Priority is required"],
    

},





   
 

}, 
{ timestamps: true });
module.exports.Bug = mongoose.model('Bug', BugSchema);