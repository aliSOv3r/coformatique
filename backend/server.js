// Import
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes/api');
const auth = require('./auth/Auth');
//db conncetion
const MONGODB_URI = 'mongodb+srv://AliOv3r:ali111295@cluster0-klgpb.gcp.mongodb.net/coformatique?retryWrites=true&w=majority'
mongoose.connect( MONGODB_URI || 'mongodb://localhost/coformatique', {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose is connected!!');
});
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//HTTP request Logger
app.use(morgan('tiny'));
app.use('/api', routes);
app.use('/auth', auth);

app.listen(PORT, console.log(`Server is up at Port ${PORT}`));