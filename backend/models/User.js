const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    degree: {
        type: String
    },
    graduation_year: {
        type: String
    },

});



module.exports = mongoose.model("Info",UserSchema);
