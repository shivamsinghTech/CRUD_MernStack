
const  mongoose  = require('mongoose');
const express=require('express');

 
var app = express();


const PORT=process.env.PORT || 5000;

app.use(express.json());



// importing database connection
require('./DB/conn');


// 

app.use(require("./Router/operation"))

// app.use(require("./Router/Autth"))



app.listen(PORT,()=>{
    console.log(`listining server at ${PORT}` )
})