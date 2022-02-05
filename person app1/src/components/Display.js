import React, { useState } from "react";

function Display(props) {
  // const [displays,setdisplays] = useState([{name:"sachin",age:22}]);
  const { displays } = props;
  return (
    <div style={{backgroundColor:"white",height:"630px",marginTop:"90px", marginRight:"100px"}}>

<h1> Details</h1>

              <img height="400px" width="400px" src={displays.img} /> 

      
        <h1 style={{backgroundColor:"black",color:"white",marginLeft:"130px",width:"130px"}}>
        age:{displays.age}

        </h1>

        <h1 style={{backgroundColor:"black",color:"white",width:"100%",}}>
        name:{displays.name}

        </h1>
    </div>
  );
}

export default Display;
