const express = require('express')
const mongoose = require('mongoose');
const app = express()
app.use(express.json());
const path = require("path");

mongoose.connect('mongodb+srv://AdityaGCSE:passwordforadi@cluster0.hzgacww.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("connected to DB"));

const Data = require('./data.js');

app.get('/database',async(req,res)=>{
  const data = await Data.find();
  res.json(data);
});

app.put('/database/new',async(req,res)=>{
  const data = new Data({
      name: req.body.name
  });
  data.save();
  res.json(data);
});

app.delete('/database/delete/:id',async(req,res)=>{
  const result = await Data.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.get('/database/:id',async(req,res)=>{
  const todo = await Data.findById(req.params.id);
  todo.name = req.body.name;
  todo.save();
  res.json(todo);
});



app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

const dotenv = require('dotenv');

dotenv.config({path:"backend/config/config.env"});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://localhost:${process.env.PORT}`)
})