const mongoose=require('mongoose')

const dataSchema=mongoose.Schema({
  userName:{type:String},
  todoSubject:{type:String},
  todoDes:{type:String},
  todoStatus:{type:String},
  todocreatedDate:{type:Date},
  todoupdatedDate:{type:Date}

},{versionKey:false})

const toDoListModel=mongoose.model('doLists',dataSchema)

module.exports=toDoListModel;