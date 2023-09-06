import React, { useState } from "react";
import Login from "./Login";
import axios from "axios";
function Register(props) {
  let [username,setUsername]=useState('')
  let [password,setPassword]=useState('')
  let [email,setEmail]=useState('')
  let [confirmPass,setConfirmPass]=useState('')
  let [loginState,setLoginState]=useState(true)

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    let userObj={username,email,password,confirmPass}
    console.log('userobj',userObj);
    axios.post('http://localhost:7000/user/Register',userObj)
    .then((res)=>{
      console.log("the response coming====",res)
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
    <div style={{height:'900px',width:"100%",display:"flex"}}>
      <h3 style={{marginLeft:150,marginTop:30}}> Register today</h3>
    
    <div >
    <form onSubmit={handleFormSubmit}>
     <div style={{marginLeft:-160,marginTop:160}}>
     
     <div style={{display:'flex'}}>
      <div style={{marginRight:100}} >
      <div style={{marginBottom:20}}>Full Name:</div>
       <input type="text"  value={username} onChange={(e)=>setUsername(e.target.value) } style={styles.input} />
      </div>
       <div > 
        <div style={{marginBottom:20}}>Email Id:</div>
        <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value) } style={styles.input}/>
        </div>
        </div>

        <div style={{display:'flex',marginTop:60}}>
      <div style={{marginRight:100}} >
      <div style={{marginBottom:20}}>Password:</div>
       <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value) } style={styles.input} />
      </div>
       <div > 
        <div style={{marginBottom:20}}> Confirm Password:</div>
        <input type="text"  value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value) } style={styles.input}/>
        </div>
        </div>
        <div style={{marginTop:70}}>
          <text>Register as:</text>
          <input type="radio" checked={true} style={{marginLeft:30,marginRight:10}}/ >
          <text>Jobseeker</text>
          <input type="radio"  style={{marginLeft:30,marginRight:10}}/>
          <text>Recruiter</text>
          <input type="radio"  style={{marginLeft:30,marginRight:10}}/>
          <text>Employer</text>
          
        </div>
        <button type="submit"  style={{paddingLeft:80,paddingRight:80,backgroundColor:" #133D7A",color:'white', border: "1px solid #D0D0D0",borderRadius:"5px",marginTop:50,paddingTop:10,paddingBottom:10}}>Register</button>
        </div>
     </form>
     </div>

     <div>
      <div style={styles.verticleLine}></div>
     </div>
     {
      loginState?
      <div style={{marginLeft:250,marginTop:300}}>
      <h6>Already Registered?</h6>
      <p style={{color:'#1676F3'}} onClick={()=>setLoginState(false)}>Log into your Account</p>
     </div>:
     <div >
      <div style={{marginLeft:250,marginTop:70}}>
      <h6>Already Registered?</h6>
      <h6>Log into your Account</h6>
      </div>
      <div style={{marginLeft:50,marginTop:70}} >
      <Login/>
      </div>
      </div>
     }
     
    </div>
  );
}
export default Register;
const styles={
  input:{
    border: "1px solid #D0D0D0",
    borderRadius:"1px",
    width:200,
    height:40
  },
  verticleLine:{
    height: '50%',
    width: 1,
    backgroundColor:"black",
    marginLeft:30,
    marginTop:60,
    marginBottom:160
  },
}
