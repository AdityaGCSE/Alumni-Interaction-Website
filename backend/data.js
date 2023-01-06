const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name:{
        type: String,
        default:''
    },
    email_id: {
        type: String,
        default:''
    },
    graduation_year: {
        type: String,
        default:''
    },
    degree: {
        type: String,
        default:''
    },
    about: {
        type: String,
        default:''
    },


});

const Details = mongoose.model("Info",DataSchema);


module.exports = Details;