const express=require('express')
const todoListModel=require('../Models/toDoListModel')

exports.createTodo=(req,res)=>{
  const reqBody=req.body
  const userName=req.headers['selectedUser']
  let todoSubject =req.body['todoSubject']
  let todoDes= req.body['todoDes']
  let todoStatus= 'new'
  let todocreatedDate=Date.now()
  let todoupdatedDate=Date.now()

  let postedData={
  userName:userName,
  todoSubject:todoSubject,
  todoDes:todoDes,
  todoStatus:todoStatus,
  todocreatedDate:todocreatedDate,
  todoupdatedDate:todoupdatedDate
  }
  todoListModel.create(postedData,(err,data)=>{
    if(err){
      res.status(402).json({status:"New List Create Failed"})
    }
    else{
      res.status(201).json({status:"Success",data:data})
    }
  })
}


exports.selectTodo=(req,res)=>{
  const userName=req.headers['selectedUser']
  todoListModel.find({userName},(err,data)=>{
    if(err){
      res.status(402).json({status:"User Data receveing Failed"})
    }
    else{
      res.status(201).json({status:"Success",data:data})
    }
  })
}

exports.updateTodo=(req,res)=>{
  const _id=req.body['_id']
  let todoSubject =req.body['todoSubject']
  let todoDes= req.body['todoDes']
  let todoupdatedDate=Date.now()
  let PostData={
    todoSubject:todoSubject,
    todoDes:todoDes,
    todoupdatedDate:todoupdatedDate
  }
todoListModel.updateOne({_id},{$set:PostData},{upsert:true},(err,data)=>{
  if(err){
    res.status(402).json({status:"Erro!Data Updating Failed"})
  }
  else{
    res.status(201).json({status:"Success",data:data})
  }
})

}


exports.updateStatusTodo=(req,res)=>{
  let _id=req.body['_id']
  let todoStatus=req.body['todoStatus']
  let todoupdatedDate=Date.now()
  let PostData={
    todoStatus:todoStatus,
    todoupdatedDate:todoupdatedDate
  }
  todoListModel.updateOne({_id},{$set:PostData},{upsert:true},(err,data)=>{
    if(err){
      res.status(402).json({status:"Erro!Data Updating Failed"})
    }
    else{
      res.status(201).json({status:"Success",data:data})
    }
  })
}
exports.deleteTodo=(req,res)=>{
  let _id=req.body['_id']
  todoListModel.delete({_id},(err,data)=>{
    if(err){
      res.status(402).json({status:"Erro!Data deleting Failed"})
    }
    else{
      res.status(201).json({status:"Success",data:data})
    }
  })
}

exports.selectTodoByStatus=(req,res)=>{
  const userName=req.headers['selectedUser']
  const todoStatus=req.body['todoStatus']
  todoListModel.find({userName:userName,todoStatus:todoStatus},(err,data)=>{
    if(err){
      res.status(402).json({status:"User Data receveing Failed"})
    }
    else{
      res.status(201).json({status:"Success",data:data})
    }
  })
}

exports.filterByDate=(req,res)=>{
  const userName=req.headers['selectedUser']
  const fromDate=req.body['fromDate']
  const toDate=req.body['toDate']

  todoListModel.find({userName:userName,todocreatedDate:{$gte:new Date(fromDate)},$lte:new Date(toDate)},(err,data)=>{
    if(err){
      res.status(402).json({status:"User Data receveing Failed"})
    }
    else{
      res.status(201).json({status:"Success",data:data})
    }
  })
}