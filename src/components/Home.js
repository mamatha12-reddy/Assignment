import React from "react";
import Card from "./Card";
import Footer from "./Footer";
function Home(){
  return(
    <div>
    <div className='background'>
    <div id="container">
    <div className='top-talent'>DISCOVER TOP TALENT</div>
    <div id="ai_power">AI Powered Talent Solution</div>
    <div id="unlock_top">Unlock top- tier candidates matched to you specific needs effortlessly with our AI driven platform. Streamlined hiring, expectational result. </div>
    <div id="hire">
      <div id="hire_text">Hire with AI Precision</div>
      </div>
    </div>
  </div>

<div id="explore_path">Explore your path</div>
<div id="your_path">Find your path</div>
<div id="cardStyle">
    <Card/>
</div>
<div id="footerStyle">
    <Footer/>
</div>
      
</div>
  
  )
}
export default Home