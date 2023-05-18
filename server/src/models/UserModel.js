const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// user schema 
const UserSchema = new mongoose.Schema({
    // email field
    email: {
        type: String,
        required: [true, "Please enter an e-mail!"],
        unique: [true, "An account with that e-mail already exists!"]
    },
    // password field
    password: {
        type: String,
        required: [true, "A password is required to register!"],
        unique: false
    },
    todos: []
});

const UserModel = mongoose.model("Users", UserSchema)

module.exports = UserModel