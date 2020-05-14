// Import
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

//db conncetion
const MONGODB_URI = 'mongodb+srv://AliOv3r:ali111295@cluster0-klgpb.gcp.mongodb.net/coformatique?retryWrites=true&w=majority'
mongoose.connect( MONGODB_URI || 'mongodb://localhost/coformatique', {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose is connected!!');
});