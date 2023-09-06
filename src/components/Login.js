import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  let [username,setUsername]=useState('')
  let [password,setPassword]=useState('')
  let [error,setError]=useState(false)

  const userNameState=(value)=>{
   //console.log("e===",value)
      setUsername(value)
      setError(false)
  }
  const userPassword=(value)=>{
   // console.log("e===",value)
      setPassword(value)
      setError(false)
  }
  const handleFormSubmit=(e)=>{
    
    e.preventDefault();
    let userObj={username,password}
    console.log('userobj',userObj);
   axios.post('http://localhost:7000/user/Login',userObj)
    .then((res)=>{
      console.log("the response coming====",res)
      if(res.data.message==="Login-Fail")
      {
        setError(true)
      }
        alert(res.data.message)
    })
    .catch(
      err=>{
          console.log(err);
          alert("something went wrong")
      }

  )
   
}
  return (
    <form onSubmit={handleFormSubmit}>
      
       <div style={props.style}>
       <div style={{marginLeft:30,marginTop:30}}>
      <div style={{marginBottom:20}} >Email Address:</div>
      <div >
       <input type="text"  value={username} onChange={(e)=>userNameState(e.target.value) } class="form-control"  style={styles.input}/>
        </div>
        <div style={{marginBottom:20,marginTop:20}}>Password:</div>
        <div > 
        <input type="text"  value={password} onChange={(e)=>userPassword(e.target.value) }  style={styles.input} />
        <div style={{color:'red'}}>{error ?"Invalid Email or Password":null}</div>
        </div>
        <div style={{display:'flex',marginTop:30,marginLeft:30}}>
        <input class="form-check-input" type="checkbox" name="remember" checked={true}/>
          <div style={{marginRight:10}}>RememberMe</div>
          <div style={{marginRight:10,fontWeight:700}}>Forgot Password?</div>
        <button type="submit"  style={{paddingLeft:25,paddingRight:25,backgroundColor:" #133D7A",color:'white', border: "1px solid #D0D0D0",borderRadius:"5px",paddingBottom:5,paddingTop:5,marginTop:-5}}>Log In</button>
        </div>
       
        </div>
        </div>
        
     
    </form>
  );
}
export default Login;
const styles={
  input:{
    border: "1px solid #D0D0D0",
    borderRadius:"1px",
    width:200,
    height:40
  }
 
}

