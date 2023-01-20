const express=require('express')
const jwd=require('jsonwebtoken')

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

exports.userLogin=(req,res)=>{
  const userName=req.body['userId']
  const passWord=req.body['password']
profileModel.find({userId:userName,password:passWord}, (err,data)=>{
  if(err){
    res.status(400).json({status:"failed",data:err})
  }
  else{
    
     if(data.length>0){
        
      //creating Json Web Token
      let payLoad={
          exp:Math.floor((Date.now()/1000)+(24*60*60)), data:data[0]
        }
        let token=jwd.sign(payLoad,'SecurityKey123456')

      res.status(200).json({status:"Success",token:token,data:data[0]})
     }
     else{
      res.status(400).json({status:"Unauthorized"})
     }
    
    
  }
})
}

exports.selectUser=(req,res)=>{
const userName=req.headers['selectedUser']
  profileModel.find({userId:userName},{password:0},(err,data)=>{
    if(err){
      res.status(401).json({status:'not good unauthorized'})
    }
    else{
      res.status(201).json({status:'success', data:data})
    }
  })
}


exports.updateUser=(req,res)=>{
  const userName=req.headers['selectedUser']
  const reqBody=req.body
  profileModel.updateOne({userId:userName},{$set:reqBody},{upsert:true},(err,data)=>{
    if(err){
      res.status(401).json({status:"error While updating"})
    }
    else{
      res.status(201).json({status:'success',data:data})
    }
  })
}