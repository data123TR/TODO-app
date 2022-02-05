import React from 'react';

function FetchDataShow(props) { 
  return <div>
     {props.updatedData.map((da,index)=>{
         return(   
         <p  key={index} style={{margin:'0px'}}>{da}</p>
         )
     })}

  </div>;
}

export default FetchDataShow;
