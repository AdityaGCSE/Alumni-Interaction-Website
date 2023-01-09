const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body,validationResult} = require('express-validator');

router.post('/create',[
    body('name','Enter a valid name').isLength({min:2}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password should have atleast 8 charecters').isLength({min:8}),
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "user already exists"});
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        degree: req.body.degree,
        graduation_year: req.body.graduation_year
    })
    res.send(user);
});


router.get('/', async (req,res)=>{
    const user = await User.find();
    res.send(user);
});

router.put('/update',[
    body('name','Enter a valid name').isLength({min:2}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password should have atleast 8 charecters').isLength({min:8}),
    body('graduation_year').isNumeric()
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    let user = await User.findOne({email: req.body.email});
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.degree = req.body.degree;
        user.graduation_year = req.body.graduation_year;
        user.save();
        res.send(user);
});


module.exports = router;
