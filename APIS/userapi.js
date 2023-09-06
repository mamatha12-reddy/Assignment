const exp=require('express')
const userapi=exp.Router()
userapi.use(exp.json())

userapi.post('/Register',(req,res)=>{
  console.log("the request coming====",req.body)
  res.send({message:"Registration-Successful"})

})
userapi.post('/Login',(req,res)=>{
  console.log("the request coming====",req.body)
  if(req.body.username === "Mamatha" && req.body.password === "Pass" )
  res.send({message:"Login-Successful"})
  else{
    res.send({message:"Login-Fail"})
  }

})

module.exports=userapi