const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    userName: { 
    type: String, 
    required: [true, "Name is required"],
    minlength: [2, "Name must be at least 2 characters"]

},

email: { 
    type: String, 
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
          message: "Please enter a valid email"
      },
    required: [true, "Email is required"]
   
    

},

password: { 
    type: String, 
    required: [true, "Password is required"],
    minlength: [8, "Name must be at least 8 characters"]

},



// createdBugs: [
//     {
//         type: Schema.Types.ObjectId,
//         ref: 'Bug'
//     }
// ] 
// });

},

{ timestamps: true });

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });
module.exports.User = mongoose.model('User', UserSchema);