const exp=require('express')
const path=require('path')
const userapi=require('./APIS/userapi')
const app=exp()

app.use(exp.static(path.join(__dirname,'./build/')))
app.use('/user',userapi)



let PORT=7000
app.listen(PORT,()=>{
  console.log("`server is listening at ${PORT}`")
})