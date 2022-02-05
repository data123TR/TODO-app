import React from 'react'

function Home(props) {
    return (

       <div><h2>
              
            <img src ='/image.jpeg'/>
            <p>{props.description}</p>
               {/* <p>image:{props.img}</p> */}
        </h2>
        </div>
    )
}

export default Home