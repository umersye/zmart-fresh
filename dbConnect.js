const mongoose = require('mongoose')

const URL = 'mongodb+srv://syedumer9885:rahimanumer@cluster0.11kmc.mongodb.net/sheypos'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})