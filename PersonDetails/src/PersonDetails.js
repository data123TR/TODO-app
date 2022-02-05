
import React from 'react'

function PersonDetails(props) {
    return (
        <div className='table'>
            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th>sl no</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Images</th>
                    </tr>
                </thead>
                {console.log('asdf',props.data)}
                {props.data?.map(item => {
                    return <tr>
                        <td>{item.id}</td>
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
