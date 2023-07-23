const mongoose = require('mongoose');
require('dotenv').config();


const connectToDb = ()=>{
    try {
        mongoose.connect(process.env.mongoURI);
        console.log('Connected To DB');
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectToDb