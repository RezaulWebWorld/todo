const mongoose=require('mongoose')

const dataSchema=mongoose.Schema({
  fName:{type: "string"},
  lName:{type:"string"},
  email:{type:"string"},
  dob:{type:"string"},
  userId:{type:"string"},
  password:{type:"string"}
},{versionKey:false})


const profileModel=mongoose.model('profile', dataSchema)

module.exports=profileModel;