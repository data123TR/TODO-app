import React, { useState } from 'react'
import PersonDetails from './PersonDetails'
import Personlist from './Personlist'
import App from './App'
function PersonApp() {
    const [data, setData] = useState([])


    return (
        <div style={{display:'flex', justifyContent:'space-evenly'}} className='person'>
            <Personlist setData={setData} data={data} />
            <PersonDetails  data={data}/>
        </div>
    )
}

export default PersonApp
