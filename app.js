// Basic Lib Configure

const express=require('express')
const bodyParser=require('body-parser')
const app= new express()
const route=require('./src/Routes/api')


///Security Middle Ware Configure

const rateLimit=require("express-rate-limit")
const mongoSanit=require("express-mongo-sanitize")
const cors= require('cors')
const helmet=require("helmet")
const hpp = require("hpp")
const xss= require("xss-clean")

//Database Connection Import

const mongoose=require('mongoose')
const router = require('../../Rest Api Structure/src/routes/api/api')

///Implementation
app.use(mongoSanit())
app.use(cors())
app.use(helmet())
app.use(xss())
app.use(hpp())

app.use(bodyParser.json())

let limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

let url='mongodb://127.0.0.1:27017/Todo'
let option={user:'', pass:''}

mongoose.connect(url,option,function(err){
  console.log("Connection Established Successfully to TODO Database")
  console.log(err)
})

app.use('/v1/api',router)

app.use('*', (req,res)=>{
  res.status(404).json({status:"Failed", data:"No Directory found"})
})

module.exports=app