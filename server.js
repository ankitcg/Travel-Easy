const express = require('express');
const app = express();
const connectToDb = require('./db');
const userRoute = require('./route/user');
const authRoute = require('./route/auth');
const carRoute = require('./route/car');
const adminRoute = require('./route/admin');
const cors = require('cors');
require('dotenv').config();


connectToDb();

app.use(cors())
app.use(express.json());

app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/car',carRoute);
app.use('/api/admin',adminRoute)

app.use('/',(req,res)=>{
    res.send('Server Side');
})

app.listen(process.env.PORT ,(err)=>{
    if(err){
        return console.log('Not Connected To Port')
    }
    console.log('Connected To Port');
})