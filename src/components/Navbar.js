
import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Link,
  Route,
  useHistory,
  Routes
} from "react-router-dom";
import Login from "./Login";
import Card from './Card'
import Home from './Home';
import Register from "./Register";


function Navbar() {
  const [clicked, setClicked] = useState(false);
  let handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <BrowserRouter>
      <nav>
        <img  src={require("../image/infoSec.png")}
                      style={{ height: 80, width: 120 }}
          />
       
        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <Link to="/" className="nav-link text-dark " >
                <p  >Home</p>
              </Link>
            </li>
            <li>
              <Link to="/Browse Jobs" className="nav-link text-dark ">
                <p>Browse Jobs</p>
              </Link>
            </li>
            <li>
             
              <Link to="/Browse Candidates" className="nav-link text-dark ">
                <p>Browse Candidates</p>
              </Link>
            </li>
            <li>
              <Link to="/For JobSeekers" className="nav-link text-dark ">
                <p>For JobSeekers</p>
              </Link>
            </li>
            <li>
              <Link to="/For Recruiters" className="nav-link text-dark ">
                <p>For Recruiters</p>
              </Link>
            </li>
            <li>
              <Link to="/About Us" className="nav-link text-dark ">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link to="/FAQ's" className="nav-link text-dark ">
                <p>FAQ's</p>
              </Link>
            </li>
            {
              clicked?
              <div style={{display:'flex',marginTop:10}}>
            <li>
              <Link to="/Login" className="nav-link text-dark" >
                <p>Login</p>
              </Link>
            </li>
            <li>
              <Link to="/Register" className="nav-link  ">
                <p style={{marginLeft:35}}>Register</p>
              </Link>
            </li>
            </div>:
            <>
            <li>
              <Link to="/Login" className="nav-link text-dark" >
                <p>Login</p>
              </Link>
            </li>
            <li>
              <Link to="/Register" className="nav-link  ">
                <p>Register</p>
              </Link>
            </li>
            </>
            }
           
            
          </ul>
        
       
        
        </div>
        <div id="mobile" onClick={() => handleClick()}>
          <i id="bar" className={clicked ? "fa fa-times" : "fas fa-bars"}></i>
        </div>
       
      </nav>
      <Routes>

      <Route path="/" element={<Home/>} />

      <Route 
      path="/Login" 
      element={<Login style={{backgroundColor:'white',float: 'right',marginRight:70,marginTop:10,height:300,width:450,
       border: "1px solid #D0D0D0",
      boxShadow:"4px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius:"1px"
      }} />} />

      <Route path="/Register" element={<Register/>} />

       </Routes>
    </BrowserRouter>
  );
}
export default Navbar;
