const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
const token=req.headers['token-key']
jwt.verify(token,"SecurityKey123456",function(err,decoded){
  if(err){
    res.status(400).json({status:"unAuthorized"})
  }
  else{
    const userId=decoded['data']['userId']
    req.headers.selectedUser=userId
    next()
  }
})


}