import React from 'react'

function PersonDetails(props) {
    return (
        <div className='table'>
            <table align="center"
            border="2px double black">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Images</th>
                    </tr>
                </thead>
                {console.log('asdf',props.data)}
                {props.data?.map(item => {
                    return <tr>
                        <th>{item.name}</th>
                        <th>{item.age}</th>
                        <th><img src={item.image}/></th>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default PersonDetails
