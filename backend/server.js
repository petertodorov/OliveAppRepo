const express = require('express');
const app  = express();
const bodyParser= require('body-parser');
const cors= require('cors');
const mongoose = require('mongoose')
const port = 4000;

const oliveRoutes = require('./router/oliveRoutes');
const jarRoutes = require('./router/jarRoutes');

app.use(cors());

app.use(bodyParser.json());

app.use('/olives',oliveRoutes);
app.use('/jars',jarRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/olivesApp',{useNewUrlParser:true});

const connectionDB = mongoose.connection;


connectionDB.once('open',()=>{
    console.log(`MongoDB connection successfull`)
})

app.listen(port,()=>{
console.log(`Express server running on Port: ${port}`);
})

