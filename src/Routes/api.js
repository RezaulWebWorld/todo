const express=require('express')
const router=express.Router()
const profileControl=require('../Controlers/profileControl')


router.post('/createProfile',profileControl.createProfile)















module.exports=router