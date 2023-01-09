const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://AdityaGCSE:passwordforadi@cluster0.hzgacww.mongodb.net/?retryWrites=true&w=majority";

const connectToMOngo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMOngo;
