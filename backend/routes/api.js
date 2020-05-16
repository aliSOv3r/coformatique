const express = require('express');
const router = express.Router();
const User = require('../models/user');
const fetch = require('node-fetch');
// const Reg = require('../auth/reg');
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

module.exports = router;