const express=require('express')

const profileModel=require('../Models/profileModel.js')

exports.createProfile=(req,res)=>{
const reqBody=req.body
profileModel.create(reqBody,(err,data)=>{
  if(err){
    res.status(404).json({status:"Failed",data:err})
  }
  res.status(201).json({staus:"sucessful", data:data})
})

}