const express=require('express')
const router=express.Router()
const profileControl=require('../Controlers/profileControl')
const toDoListControl=require('../Controlers/toDoListControl')
const authVerifyMiddleware=require("../Middleware/authVerifyMiddleware")


router.post('/createProfile',profileControl.createProfile)
router.post('/userLogin',profileControl.userLogin)




router.get('/selectUser',authVerifyMiddleware,profileControl.selectUser)
router.post('/updateUser',authVerifyMiddleware,profileControl.updateUser)


router.post('/createTodo',authVerifyMiddleware,toDoListControl.createTodo)
router.get('/selectTodo',authVerifyMiddleware,toDoListControl.selectTodo)
router.post('/updateTodo',authVerifyMiddleware,toDoListControl.updateTodo)
router.post('/updateStatusTodo',authVerifyMiddleware,toDoListControl.updateStatusTodo)
router.post('/deleteTodo',authVerifyMiddleware,toDoListControl.deleteTodo)
router.get('/selectTodoByStatus',authVerifyMiddleware,toDoListControl.selectTodoByStatus)
router.get('/filterByDate',authVerifyMiddleware,toDoListControl.filterByDate)











module.exports=router