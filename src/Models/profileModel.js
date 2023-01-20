const mongoose=require('mongoose')

const dataSchema=mongoose.Schema({
  fName:{type: String},
  lName:{type:String},
  email:{type:String},
  dob:{type:String},
  userId:{type:String,unique: true},
  password:{type:String}
},{versionKey:false})


const profileModel=mongoose.model('profile', dataSchema)

module.exports=profileModel;