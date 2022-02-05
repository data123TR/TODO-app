import React from "react";

function Card(props) {
  return (
    <> 
      {/* <div style={{flexDirection:"row" , backgroundColor:"red",display:"flex",paddingLeft:"100px"}} > */}
      <div
        onClick={() => {
          props.onpress({
            name: props.name,
            age: props.age,
            img: props.img,
          });
        }}
        style={{
          marginTop:"30px",
          marginBottom: "45px",
          width: "200px",
        }}
      >
        {/* <img
          src={props.img}
          height="100px"
          width="200px"
          alt="pic"
          className="card_img"
        /> */}
        <div >
          <h4>
           {props.ind+1} . Name : {props.name}
          </h4>
        </div>
      </div>
    </>
  );
}

export default Card;
