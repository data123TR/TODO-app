import React, { useState, useEffect } from 'react'

function Fetch() {
    const [data, setdata] = useState([])
    const [showData, setshowData] = useState(false)


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then((dat) => {
            setdata(dat)
        })
    }, [])

    const handleTable = () => {
        setshowData(!showData)
    }

    return (
        <div>
            <h1>Fetch API Data</h1>
            {/* <button > show table</button> */}
            <button type="button" class="btn btn-primary" onClick={handleTable}>show table</button>
            <br></br>

            {showData ? <table className='table table-striped  text-center'>
            <tr>
                <th  scope="col">Id</th>
                <th  scope="col">name</th>
                <th  scope="col">user name</th>
                <th  scope="col">Email</th>
                <th  scope="col">Address</th>
                <th  scope="col">Phone</th>
                <th  scope="col">Website</th>
                <th  scope="col">Company</th>
            </tr>
            {data.map((val) => {
                return (<tr>
                    <td >{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td><span>{val.address.suite}</span>,<span>{val.address.street} street</span>,<br/><span>{val.address.city}</span>,<br/><span>zipcode-{val.address.zipcode}</span></td>
                    <td>{val.phone}</td>
                    <td>{val.website}</td>
                    <td><span>{val.company.name}</span>,<br/><span>{val.company.catchPhrase}</span>,<br/><span>{val.company.bs}</span></td>
                </tr>)
            })
            }
        </table>: ""}
        </div >
    )
}

export default Fetch