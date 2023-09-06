import React from "react";

function Card(props) {
  props = [1, 2, 3];
  let data = [
    {
      header:"Empower Growth",
      title:"Boost your team",
      text:"Discover top talent for your organization & accelerate your business growth. find the perfect match for your job opening with our AI driven candidate screening.",
      button:"For Employer"
  
    },
    {
      header:"Unlock Opportunities",
      title:"Maximize earnings",
      text:"Take your recruitment career to new heights. Gain access to a pool of verified job openings and multiply your earnings with our attractive commission structure.",
      button:"For Recuiters"
    },
    {
      header:"Your Dream Job",
      title:"Within Reach",
      text:"Find your dream job with ease. Access validated job opportunities and receive personalized job alerts that match your skills and preferences.",
      button:"For jobSeeker"
  
    },

  ];
  return (
    <div style={{ width: "100%" }}>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ml-5 mr-5 ">
        {data.map((ele) => {
          return (
            <div>
              <div className="m-5  ms-5  me-5 d-flex justify-content-around  ">
                <div id="cardBoxStyle">
                  <div
                   style={{...styles.cardData}}
                  >
                    <img
                      src={require("../image/empower.png")}
                      style={{ height: 80, width: 80 }}
                    />
                  </div>
                 <div  style={{...styles.cardData,fontSize:'28px',fontWeight:500}}>{ele.header}</div>
                 <div style={{...styles.cardData,fontSize:'18px',fontWeight:500}}>{ele.title}</div>
                 <div style={{...styles.cardData,fontSize:'13px',marginLeft:20,marginRight:20}}>{ele.text}</div>
                 <div style={{...styles.cardData,fontSize:'13px',padding:20,}}>
                  <div style={{backgroundColor:'#133D7A',padding:20,color:"white"}}>{ele.button}</div>
                  
                 </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const styles={
  cardData:{
    display:'flex',
    justifyContent:'center',
    marginTop:20
    
  }
}
export default Card;
