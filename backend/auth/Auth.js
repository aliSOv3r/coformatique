const express = require('express');
const auth = express.Router();
const fetch = require('node-fetch');
const User = require('../models/user');



// Register Req
auth.post('/check', (req, res) =>{
    const chkData = req.body;
    fetch('http://localhost:8080/api/users')
    .then(response => response.json())
    .then((data) => {
        let ckmMail = data;
        let checkEmail = ckmMail.filter(ckm => chkData['email'].includes(ckm.email));
        //console.log(ckmMail);
        if ( checkEmail.length === 0){
            res.send(true);
            console.log('user is new');
            const newuser = new User(chkData);
            newuser.save();
            
        } else {
            res.send(false);
            console.log('user exists');
            
        }
    })
});
auth.post('/login', (req, res) =>{
    const chkData = req.body;
    fetch('http://localhost:8080/api/users')
    .then(response => response.json())
    .then((data) => {
        let ckmMail = data;
        let checkEmail = ckmMail.filter(ckm => chkData['email'].includes(ckm.email) && chkData['password'].includes(ckm.password));
        //console.log(ckmMail);
        if ( checkEmail.length === 1){
            res.send(true);
            console.log('welcome');
        } else {
            res.send(false);
            console.log('please sign up');
            
        }
    })
});
module.exports = auth;