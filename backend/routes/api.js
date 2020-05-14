const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/',(req, res)=>{
    User.find({})
    .then((data) => {
        res.json(data);
    })
    .catch((error) =>{
        console.log('error', daerrorta)
    });
    
});

router.get('/users',(req, res) =>{
    User.find({})
    .then((data) =>{
        res.json(data);
    })
    .catch((error) =>{
        console.log('error', daerrorta)
    });
});

router.post('/save',(req, res) => {
    const data = req.body;
    const newuser = new User(data);
    newuser.save((error) => {
        if (error){
            res.status(500).json({ msg: 'sorry not saved'});
        } else {
            res.json({
                msg: 'data saved sucssfuly'
            });
        }
    })
});

module.exports = router;